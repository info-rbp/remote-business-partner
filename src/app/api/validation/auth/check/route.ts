import { NextResponse } from 'next/server';
import type { AuthCheckResponse, MockUser } from '@/lib/validation/types';

export async function GET(): Promise<NextResponse<AuthCheckResponse>> {
    // Mock user for validation flow testing
    const mockUser: MockUser = {
        isLoggedIn: true,
        email: 'admin@remotebusinesspartner.com',
        role: 'admin',
    };

    return NextResponse.json({
        success: true,
        message: 'Authentication successful',
        user: mockUser,
    });
}
