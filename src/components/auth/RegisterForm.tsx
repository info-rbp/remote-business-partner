'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { registerUser, setSessionCookie } from '@/app/actions';
import { useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { app } from '@/lib/firebase';
import { useRouter } from 'next/navigation';

const initialState = {
  message: null,
  errors: {},
  clientActionRequired: false,
  credentials: null
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" aria-disabled={pending} className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold">
      {pending ? 'Registering...' : 'Register'}
    </button>
  );
}

export function RegisterForm() {
  const [state, formAction] = useFormState(registerUser, initialState);
  const [firebaseError, setFirebaseError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (state.clientActionRequired && state.credentials) {
      const auth = getAuth(app);
      createUserWithEmailAndPassword(auth, state.credentials.email, state.credentials.password)
        .then(async (userCredential) => {
          const user = userCredential.user;
          const idToken = await user.getIdToken();
          const sessionResult = await setSessionCookie(idToken);
          if (sessionResult.success) {
            router.push('/app/dashboard');
          } else {
            setFirebaseError(sessionResult.error || 'Failed to create session.');
          }
        })
        .catch((error) => {
          const errorMessage = error.message;
          setFirebaseError(errorMessage);
        });
    }
  }, [state.clientActionRequired, state.credentials, router]);

  return (
    <form action={formAction}>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full px-3 py-2 border rounded-lg"
          required
        />
        {state.errors?.name && state.errors.name.map((error: string) => (
          <p className="text-red-500 text-xs mt-1" key={error}>{error}</p>
        ))}
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full px-3 py-2 border rounded-lg"
          required
        />
        {state.errors?.email && state.errors.email.map((error: string) => (
          <p className="text-red-500 text-xs mt-1" key={error}>{error}</p>
        ))}
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          className="w-full px-3 py-2 border rounded-lg"
          required
        />
        {state.errors?.password && state.errors.password.map((error: string) => (
          <p className="text-red-500 text-xs mt-1" key={error}>{error}</p>
        ))}
      </div>
      {firebaseError && <p className="text-red-500 text-xs mt-1">{firebaseError}</p>}
      {state.errors?._form && state.errors._form.map((error: string) => (
        <p className="text-red-500 text-xs mt-1" key={error}>{error}</p>
      ))}
      {state.message && <p className="text-green-500 text-xs mt-1">{state.message}</p>}
      <SubmitButton />
    </form>
  );
}

export default RegisterForm;