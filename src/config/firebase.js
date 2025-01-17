// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAqAtbZ_6EDr16z1CRlPA9S4LWgH_15Ey0',
  authDomain: 'kaza-9e883.firebaseapp.com',
  projectId: 'kaza-9e883',
  storageBucket: 'kaza-9e883.firebasestorage.app',
  messagingSenderId: '889891150256',
  appId: '1:889891150256:web:9aad94ff7ea6a91b559e75',
  measurementId: 'G-2EMKH1VZQT',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseDB = getFirestore(app)
