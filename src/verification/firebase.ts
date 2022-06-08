// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBTNWwRVnfYWcfD0cSzc7r1N1n5HwCAvMI",
    authDomain: "otp-app-demo-528ab.firebaseapp.com",
    projectId: "otp-app-demo-528ab",
    storageBucket: "otp-app-demo-528ab.appspot.com",
    messagingSenderId: "114463455187",
    appId: "1:114463455187:web:cbe4e5c3261387edd46126"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app