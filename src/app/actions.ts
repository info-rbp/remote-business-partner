'use server';

import { z } from 'zod';

export type FormState = {
  success: boolean;
  message: string | null;
  errors: Record<string, string[]> | null;
};

const schema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  email: z.string().email({ message: 'Invalid email address' }),
});

export async function saveProfile(prevState: FormState, formData: FormData): Promise<FormState> {
  const validatedFields = schema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
  });

  if (!validatedFields.success) {
    return {
      success: false,
      message: 'Failed to update profile.',
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // In a real application, you would save the data to your database.
  console.log('Saving profile:', validatedFields.data);

  return { success: true, message: 'Profile updated successfully!', errors: null };
}

export async function clearSessionCookie() {
  // Mock implementation
  return { success: true };
}

export async function loginUser(data: any) {
  // Mock implementation
  return { success: true };
}

export async function registerUser(data: any) {
  // Mock implementation
  return { success: true };
}

export async function setSessionCookie(data: any) {
  // Mock implementation
  return { success: true };
}

export async function submitContactForm(prevState: FormState, formData: FormData): Promise<FormState> {
  // Mock implementation
  return { success: true, message: 'Thank you for your message!', errors: null };
}
