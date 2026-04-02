'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { submitContactForm } from '@/app/actions';
import { useEffect } from 'react';

const initialState = {
  message: null,
  errors: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending} className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold">
      {pending ? 'Submitting...' : 'Submit'}
    </button>
  );
}

const ContactForm = () => {
  const [state, formAction] = useFormState(submitContactForm, initialState);

  useEffect(() => {
    if (state.message) {
      alert(state.message);
    }
  }, [state.message]);

  return (
    <form action={formAction}>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
        <input type="text" id="name" name="name" className="w-full px-3 py-2 border rounded-lg" />
        {state.errors?.name && state.errors.name.map((error: string) => <p className="text-red-500 text-xs italic" key={error}>{error}</p>)}
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
        <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-lg" />
        {state.errors?.email && state.errors.email.map((error: string) => <p className="text-red-500 text-xs italic" key={error}>{error}</p>)}
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
        <textarea id="message" name="message" rows={5} className="w-full px-3 py-2 border rounded-lg"></textarea>
        {state.errors?.message && state.errors.message.map((error: string) => <p className="text-red-500 text-xs italic" key={error}>{error}</p>)}
      </div>
      <SubmitButton />
    </form>
  );
};

export default ContactForm;