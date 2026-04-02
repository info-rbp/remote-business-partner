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

const ApplicationInterestForm = () => {
    async function submitApplicationInterestForm(prevState: any, formData: FormData) {
        'use server';
        console.log('Application interest form submitted:', {
            name: formData.get('name'),
            email: formData.get('email'),
            program: formData.get('program'),
        });
        return { message: 'Thank you for your interest! We will notify you when applications open.' };
    }

    const [state, formAction] = useFormState(submitApplicationInterestForm, initialState);

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
        <label htmlFor="program" className="block text-gray-700 font-bold mb-2">Program of Interest</label>
        <select id="program" name="program" className="w-full px-3 py-2 border rounded-lg" required>
            <option value="">Select a program</option>
            <option value="program-a">Program A</option>
            <option value="program-b">Program B</option>
            <option value="program-c">Program C</option>
        </select>
      </div>
      <SubmitButton />
    </form>
  );
};

export default ApplicationInterestForm;