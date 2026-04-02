// MOCK IMPLEMENTATION — STAGE 4 VALIDATION ONLY
'use client';

import { useState } from 'react';
import { CheckCircleIcon, XCircleIcon, ArrowPathIcon, DocumentTextIcon } from '@heroicons/react/24/solid';
import type {
  AuthCheckResponse,
  RecordCreationResponse,
  SyncStatusResponse,
  ReportingVisibilityResponse,
} from '@/lib/validation/types';

type Stage = 'idle' | 'auth' | 'record' | 'sync' | 'reporting' | 'complete';

export default function ValidationPage() {
  const [stage, setStage] = useState<Stage>('idle');
  const [recordId, setRecordId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [results, setResults] = useState<any>({});

  const resetFlow = () => {
    setStage('idle');
    setRecordId(null);
    setError(null);
    setResults({});
  };

  const runAuthCheck = async () => {
    setStage('auth');
    setError(null);
    try {
      const res = await fetch('/api/validation/auth/check');
      const data: AuthCheckResponse = await res.json();
      if (!res.ok || !data.success) throw new Error(data.message);
      setResults({ ...results, auth: data });
    } catch (e: any) {
      setError(e.message);
    }
  };

  const runRecordCreation = async () => {
    setStage('record');
    setError(null);
    try {
      const res = await fetch('/api/validation/record/create', { method: 'POST' });
      const data: RecordCreationResponse = await res.json();
      if (!res.ok || !data.success) throw new Error(data.message);
      setRecordId(data.recordId);
      setResults({ ...results, record: data });
    } catch (e: any) {
      setError(e.message);
    }
  };

  const runSyncStatus = async () => {
    if (!recordId) return;
    setStage('sync');
    setError(null);
    try {
      const res = await fetch(`/api/validation/sync/status/${recordId}`);
      const data: SyncStatusResponse = await res.json();
      if (!res.ok || !data.success) throw new Error(data.message);
      setResults({ ...results, sync: data });
    } catch (e: any) {
      setError(e.message);
    }
  };

  const runReportingVisibility = async () => {
    if (!recordId) return;
    setStage('reporting');
    setError(null);
    try {
      const res = await fetch(`/api/validation/reporting/visibility/${recordId}`);
      const data: ReportingVisibilityResponse = await res.json();
      if (!res.ok || !data.success) throw new Error(data.message);
      setResults({ ...results, reporting: data });
      setStage('complete');
    } catch (e: any) {
      setError(e.message);
    }
  };

  const isStepComplete = (step: Stage) => !!results[step];
  const isStepDisabled = (step: Stage) => {
    if (stage === 'idle' && step !== 'auth') return true;
    if (stage === 'auth' && step !== 'record') return true;
    if (stage === 'record' && step !== 'sync') return true;
    if (stage === 'sync' && step !== 'reporting') return true;
    return false;
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-gray-800 rounded-lg shadow-xl p-8">
        <h1 className="text-3xl font-bold text-center mb-2 text-cyan-400">End-to-End Data Flow Validation</h1>
        <p className="text-center text-gray-400 mb-6">A mock flow to demonstrate the data lifecycle from creation to reporting.</p>

        {stage === 'complete' ? (
          <div className="text-center p-6 bg-green-900/50 rounded-lg">
            <CheckCircleIcon className="h-16 w-16 text-green-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold">Validation Complete!</h2>
            <p className="text-gray-300 mt-2">The full data lifecycle was successfully simulated.</p>
            <button onClick={resetFlow} className="mt-6 bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded-lg transition-colors">
              Run Again
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {/* Step 1: Auth */}
            <Step title="1. Authentication Check" onRun={runAuthCheck} isComplete={isStepComplete('auth')} isDisabled={stage !== 'idle'} result={results.auth} />
            {/* Step 2: Record Creation */}
            <Step title="2. Record Creation" onRun={runRecordCreation} isComplete={isStepComplete('record')} isDisabled={stage !== 'auth' || !isStepComplete('auth')} result={results.record} />
            {/* Step 3: Sync Status */}
            <Step title="3. Sync Status Check" onRun={runSyncStatus} isComplete={isStepComplete('sync')} isDisabled={stage !== 'record' || !isStepComplete('record')} result={results.sync} />
            {/* Step 4: Reporting Visibility */}
            <Step title="4. Reporting Visibility Check" onRun={runReportingVisibility} isComplete={isStepComplete('reporting')} isDisabled={stage !== 'sync' || !isStepComplete('sync')} result={results.reporting} />
          </div>
        )}

        {error && (
          <div className="mt-6 p-4 bg-red-900/50 rounded-lg text-red-400 flex items-center space-x-3">
            <XCircleIcon className="h-6 w-6" />
            <div>
              <p className="font-bold">An error occurred:</p>
              <p>{error}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function Step({ title, onRun, isComplete, isDisabled, result }: any) {
  const Icon = isComplete ? CheckCircleIcon : DocumentTextIcon;
  const color = isComplete ? 'text-green-400' : 'text-cyan-400';

  return (
    <div className={`p-4 rounded-lg transition-all ${isComplete ? 'bg-gray-700' : 'bg-gray-700/50'}`}>
      <div className="flex items-center justify-between">
        <div className={`flex items-center space-x-3 ${color}`}>
          <Icon className="h-6 w-6" />
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
        {!isComplete && (
          <button onClick={onRun} disabled={isDisabled} className="bg-cyan-500 text-white font-bold py-2 px-4 rounded-lg transition-colors disabled:bg-gray-600 disabled:cursor-not-allowed hover:bg-cyan-600">
            Run
          </button>
        )}
      </div>
      {result && (
        <div className="mt-3 pl-9 text-sm text-gray-300">
          <pre className="bg-gray-900 p-3 rounded-md overflow-x-auto"><code>{JSON.stringify(result, null, 2)}</code></pre>
        </div>
      )}
    </div>
  );
}
