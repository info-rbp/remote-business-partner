'use server'

import { z } from 'zod';
import { cookies } from 'next/headers';
import { adminAuth } from '@/lib/firebase-admin';

// Reusable schema
const loginSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email." }),
  password: z.string().min(1, { message: "Password is required." }),
});

export async function loginUser(prevState: any, formData: FormData) {
  const validatedFields = loginSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: null
    };
  }

  // NOTE: Because "signInWithEmailAndPassword" runs on the client-side Firebase Auth SDK,
  // typically Next.js server actions handle session cookie creation, not the raw login.
  // 
  // For the sake of this skeleton, we will return an instruction to the client 
  // to login via the client SDK and then call another action to set the session cookie.
  // 
  // See `setSessionCookie` below.
  return { 
      message: null, 
      clientActionRequired: true, 
      credentials: validatedFields.data 
  };
}


const registrationSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  password: z.string().min(8, { message: "Password must be at least 8 characters." }),
});

export async function registerUser(prevState: any, formData: FormData) {
  const validatedFields = registrationSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    password: formData.get('password'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // Return to client to perform the actual Firebase Registration so the client sdk retains state
  return { 
      message: null, 
      clientActionRequired: true, 
      credentials: validatedFields.data 
  };
}

export async function setSessionCookie(idToken: string) {
    try {
        // Create session cookie using firebase admin
        const expiresIn = 60 * 60 * 24 * 5 * 1000; // 5 days
        const sessionCookie = await adminAuth.createSessionCookie(idToken, { expiresIn });
        
        // Set cookie
        const cookieStore = await cookies();
        cookieStore.set('session', sessionCookie, { maxAge: expiresIn, httpOnly: true, secure: process.env.NODE_ENV === 'production', path: '/' });
        
        return { success: true };
    } catch (error) {
        console.error("Session cookie error", error);
        return { success: false, error: "Unauthorized" };
    }
}

export async function clearSessionCookie() {
    const cookieStore = await cookies();
    cookieStore.delete('session');
    return { success: true };
}

const contactSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Please enter a valid email." }),
    message: z.string().min(10, { message: "Message must be at least 10 characters." }),
  });
  
  export async function submitContactForm(prevState: any, formData: FormData) {
    const validatedFields = contactSchema.safeParse({
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    });
  
    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
      };
    }
  
    console.log('Contact form submitted:', validatedFields.data);
  
    return { message: 'Your message has been sent successfully!' };
  }