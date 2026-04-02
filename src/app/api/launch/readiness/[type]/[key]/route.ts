import { NextRequest } from 'next/server';
import { apiResponse } from '@/lib/api';
import { mockLaunchData } from '@/services/mock-data/launch';
import { ApiResponse, LaunchReadiness } from '@/lib/types';

export function GET(
  request: NextRequest,
  { params }: { params: { type: string; key: string } }
) {
  const { type, key } = params;
  const launchObject = mockLaunchData.find(
    (obj) => obj.object_type === type && obj.key === key
  );

  if (launchObject) {
      const response: ApiResponse<LaunchReadiness> = {
          success: true,
          data: launchObject,
          error: null,
      }
    return apiResponse(response.success, response.data, response.error, 200);
  } else {
    const response: ApiResponse<null> = {
        success: false,
        data: null,
        error: { message: 'Not Found' },
    }
    return apiResponse(response.success, response.data, response.error, 404);
  }
}
