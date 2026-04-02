import { customInitApp } from './config';
import { getAuth } from 'firebase-admin/auth';

customInitApp();

export const adminAuth = getAuth();