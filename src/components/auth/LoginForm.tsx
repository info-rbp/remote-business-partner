'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { loginUser } from '@/app/actions';

const initialState = {
  message: null,
  errors: {},
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" aria-disabled={pending} className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold">
      Login
    </button>
  );
}

export function LoginForm() {
  const [state, formAction] = useFormState(loginUser, initialState);

  return (
    <form action={formAction}>
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
      {state.errors?._form && state.errors._form.map((error: string) => (
        <p className="text-red-500 text-xs mt-1" key={error}>{error}</p>
      ))}
      {state.message && <p className="text-green-500 text-xs mt-1">{state.message}</p>}
      <SubmitButton />
    </form>
  );
}

export default LoginForm;
