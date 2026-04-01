'use client'

import { useFormState } from 'react-dom'
import { login } from '@/app/actions'

const initialState = {
  message: "",
}

export default function SignInPage() {
  const [state, formAction] = useFormState(login, initialState)
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Sign In</h2>
        <form action={formAction} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="username">Username</label>
            <input
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="username"
              name="username"
              type="text"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="password">Password</label>
            <input
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="password"
              name="password"
              type="password"
              required
            />
          </div>
          <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" type="submit">
            Sign In
          </button>
          {state.message && <p className="text-red-500 text-center">{state.message}</p>}
        </form>
      </div>
    </div>
  );
}