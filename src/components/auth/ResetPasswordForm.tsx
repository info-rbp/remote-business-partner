'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { confirmPasswordReset } from 'firebase/auth';
import { getAuth } from 'firebase/auth';
import { app } from '@/lib/firebase';
import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

const initialState = {
  message: null,
  error: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending} className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold">
      {pending ? 'Resetting...' : 'Reset Password'}
    </button>
  );
}

export default function ResetPasswordForm() {
    const [state, setState] = useState(initialState);
    const router = useRouter();
    const searchParams = useSearchParams();
    const oobCode = searchParams.get('oobCode');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const password = formData.get('password') as string;

        if (!password) {
            setState({ message: null, error: 'Please enter a new password.' });
            return;
        }

        if (!oobCode) {
            setState({ message: null, error: 'Invalid password reset link.' });
            return;
        }

        const auth = getAuth(app);
        try {
            await confirmPasswordReset(auth, oobCode, password);
            setState({ message: 'Password has been reset successfully. You can now log in with your new password.', error: null });
            setTimeout(() => router.push('/sign-in'), 3000);
        } catch (error: any) {
            setState({ message: null, error: error.message });
        }
    };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="password" className="block text-gray-700 font-bold mb-2">New Password</label>
        <input
          type="password"
          id="password"
          name="password"
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