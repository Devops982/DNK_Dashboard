// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDj8OG2hlsc64I_VSVkQ3TtfbL2NnSNsNI',
  authDomain: 'dnk-dashboard.firebaseapp.com',
  projectId: 'dnk-dashboard',
  storageBucket: 'dnk-dashboard.appspot.com',
  messagingSenderId: '980174612780',
  appId: '1:980174612780:web:28825e27a1d2ede437e489',
  measurementId: 'G-5P917N2QK0',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
