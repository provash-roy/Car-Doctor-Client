import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCm-QiZ3_v1Dp63e3dQlV7egzHHMev8k7w",
  authDomain: "cars-doctor-20056.firebaseapp.com",
  projectId: "cars-doctor-20056",
  storageBucket: "cars-doctor-20056.firebasestorage.app",
  messagingSenderId: "135145763944",
  appId: "1:135145763944:web:adb8f995eacea94b3637dd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);