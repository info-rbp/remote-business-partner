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

const SupportForm = () => {
    async function submitSupportForm(prevState: any, formData: FormData) {
        'use server';
        console.log('Support form submitted:', {
            name: formData.get('name'),
            email: formData.get('email'),
            issue: formData.get('issue'),
        });
        return { message: 'Your support request has been submitted.' };
    }

    const [state, formAction] = useFormState(submitSupportForm, initialState);

    useEffect(() => {
        if (state.message) {
        alert(state.message);
        }
    }, [state.message]);

  return (
    <form action={formAction}>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
        <input type="text" id="name" name="name" className="w-full px-3 py-2 border rounded-lg" required />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
        <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-lg" required />
      </div>
      <div className="mb-4">
        <label htmlFor="issue" className="block text-gray-700 font-bold mb-2">Describe your issue</label>
        <textarea id="issue" name="issue" rows={5} className="w-full px-3 py-2 border rounded-lg" required></textarea>
      </div>
      <SubmitButton />
    </form>
  );
};

export default SupportForm;