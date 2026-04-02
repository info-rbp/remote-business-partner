import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { firebaseConfig } from './config';

// Initialize Firebase only if it hasn't been initialized already
export const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);