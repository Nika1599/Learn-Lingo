import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBT44JLxByUUVW6o8Gq4VFMIx-H9i3Gdd8',
  authDomain: 'learn-lingo-68066.firebaseapp.com',
  projectId: 'learn-lingo-68066',
  storageBucket: 'learn-lingo-68066.firebasestorage.app',
  messagingSenderId: '439203061997',
  appId: '1:439203061997:web:05abad6703951c9aaface4',
  measurementId: 'G-DWQ9SDTJQ8',
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
