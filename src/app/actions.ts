'use server'

import { redirect } from 'next/navigation'

export async function login(prevState: any, formData: FormData) {
  const username = formData.get('username')
  const password = formData.get('password')

  if (username === 'admin' && password === 'admin123') {
    redirect('/member/dashboard')
  } else {
    return {
      message: 'Invalid username or password',
    }
  }
}