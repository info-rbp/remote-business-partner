import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';
import { ApiError, Meta } from './types';

export function apiResponse<T>(
    success: boolean,
    data: T | null,
    error: ApiError | null,
    status: number = 200
) {
  const meta: Meta = {
    timestamp: new Date().toISOString(),
    requestId: uuidv4(),
  };

  return NextResponse.json({ success, data, error, meta }, { status });
}
