import { NextRequest } from 'next/server';
import { apiResponse } from '@/lib/api';
import { z } from 'zod';
import { ApiResponse, UserProfile } from '@/lib/types';

const schema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  email: z.string().email({ message: 'Invalid email address' }),
});

export async function POST(request: NextRequest) {
    const body = await request.json();
    const validatedFields = schema.safeParse(body);

    if (!validatedFields.success) {
        const response: ApiResponse<null> = {
            success: false,
            data: null,
            error: { message: 'Invalid request body' },
        }
        return apiResponse(response.success, response.data, response.error, 400);
    }

    // In a real application, you would save the data to your database.
    console.log('Saving profile:', validatedFields.data);

    const response: ApiResponse<UserProfile> = {
        success: true,
        data: {
            name: validatedFields.data.name,
            email: validatedFields.data.email,
        },
        error: null,
    }
    return apiResponse(response.success, response.data, response.error, 200);
}
