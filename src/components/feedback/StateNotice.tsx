'use client';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { AccountState, getStateMetadata } from '@/lib/state';
import { AlertCircle, CheckCircle, XCircle, Info } from 'lucide-react';

interface StateNoticeProps {
  state: AccountState;
  remediationLink?: string;
  remediationText?: string;
}

export const StateNotice = ({ state, remediationLink, remediationText }: StateNoticeProps) => {
  const { label, description, variant } = getStateMetadata(state);

  const getIcon = () => {
    switch (variant) {
      case 'destructive':
        return <XCircle className="h-4 w-4" />;
      case 'secondary':
        return <Info className="h-4 w-4" />;
      case 'default':
        return <CheckCircle className="h-4 w-4" />;
      default:
        return <AlertCircle className="h-4 w-4" />;
    }
  };

  return (
    <Alert variant={variant === "destructive" ? "destructive" : "default"}>
      {getIcon()}
      <AlertTitle>{label}</AlertTitle>
      <AlertDescription>
        {description}
        {remediationLink && (
          <Button asChild variant="link" className="p-0 h-auto ml-1">
            <a href={remediationLink}>{remediationText || 'Click here to resolve'}</a>
          </Button>
        )}
      </AlertDescription>
    </Alert>
  );
};
