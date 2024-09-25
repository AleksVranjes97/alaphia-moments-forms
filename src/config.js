// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDF5vt6E0UE3l8YnuVvaW_uRuNj7FpKNcM",
  authDomain: "alaphia-moments-forms.firebaseapp.com",
  databaseURL: "https://alaphia-moments-forms-default-rtdb.firebaseio.com",
  projectId: "alaphia-moments-forms",
  storageBucket: "alaphia-moments-forms.appspot.com",
  messagingSenderId: "374201343198",
  appId: "1:374201343198:web:9801372abae9b685baf64f",
  measurementId: "G-992LD4HK5K"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app)
export default app;