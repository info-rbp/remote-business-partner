import { initializeApp, getApps } from "firebase-admin/app";
import { credential } from "firebase-admin";

const firebaseAdminConfig = {
  projectId: process.env.FIREBASE_PROJECT_ID,
  clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
  privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
};

export function customInitApp() {
  if (getApps().length <= 0) {
    if (firebaseAdminConfig.projectId && firebaseAdminConfig.clientEmail && firebaseAdminConfig.privateKey) {
        initializeApp({
            credential: credential.cert(firebaseAdminConfig),
          });
    } else {
        // Fallback or local emulator init if needed
        console.warn("Firebase Admin SDK initialized without credentials.");
        initializeApp();
    }
  }
}