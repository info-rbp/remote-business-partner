'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { sendPasswordResetEmail } from 'firebase/auth';
import { getAuth } from 'firebase/auth';
import { app } from '@/lib/firebase';
import { useState } from 'react';

const initialState = {
  message: null,
  error: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending} className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold">
      {pending ? 'Sending...' : 'Send Password Reset Email'}
    </button>
  );
}

export default function ForgotPasswordForm() {
    const [state, setState] = useState(initialState);
  
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      const email = formData.get('email') as string;
  
      if (!email) {
        setState({ message: null, error: 'Please enter your email.' });
        return;
      }
  
      const auth = getAuth(app);
      try {
        await sendPasswordResetEmail(auth, email);
        setState({ message: 'Password reset email sent. Please check your inbox.', error: null });
      } catch (error: any) {
        setState({ message: null, error: error.message });
      }
    };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full px-3 py-2 border rounded-lg"
          required
        />
      </div>
      {state.error && <p className="text-red-500 text-xs mt-1">{state.error}</p>}
      {state.message && <p className="text-green-500 text-xs mt-1">{state.message}</p>}
      <SubmitButton />
    </form>
  );
}