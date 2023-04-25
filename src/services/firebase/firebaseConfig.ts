// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBEgN5WCkKB8JDvh8gsd5XYTXlsURHcDUc',
  authDomain: 'e-commerce-38c50.firebaseapp.com',
  projectId: 'e-commerce-38c50',
  storageBucket: 'e-commerce-38c50.appspot.com',
  messagingSenderId: '431337751363',
  appId: '1:431337751363:web:aa5d6a7b03e6558465a5f6',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);