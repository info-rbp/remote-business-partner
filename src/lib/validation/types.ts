export interface MockUser {
  isLoggedIn: boolean;
  email: string;
  role: 'admin' | 'user';
}

export interface RecordCreationRequest {
  projectName: string;
}

export interface RecordCreationResponse {
  success: boolean;
  recordId: string;
  message: string;
}

export interface SyncStatusResponse {
  success: boolean;
  recordId: string;
  status: 'Pending' | 'Synced' | 'Error';
  message: string;
}

export interface ReportingVisibilityResponse {
  success: boolean;
  recordId: string;
  isVisible: boolean;
  message: string;
  checkedAt: string;
}

export interface AuthCheckResponse { 
    success: boolean; 
    message: string; 
    user: MockUser | null; 
}
