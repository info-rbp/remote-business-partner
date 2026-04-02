'use client';

import { useFormState, useFormStatus } from 'react-dom';
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

const CallToAction = () => {
    async function submitLeadForm(prevState: any, formData: FormData) {
        'use server';
        console.log('Lead form submitted:', {
            email: formData.get('email'),
        });
        return { message: 'Thank you for your interest!' };
    }

    const [state, formAction] = useFormState(submitLeadForm, initialState);

    useEffect(() => {
        if (state.message) {
        alert(state.message);
        }
    }, [state.message]);

  return (
    <div className="bg-gray-100 p-8 rounded-lg text-center">
      <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
      <p className="mb-4">
        Sign up to learn more about our exclusive offers and get the latest updates.
      </p>
      <form action={formAction} className="flex justify-center items-center">
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          className="px-4 py-2 border rounded-l-lg"
          required
        />
        <SubmitButton />
      </form>
    </div>
  );
};

export default CallToAction;