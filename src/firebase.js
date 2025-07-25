// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: import.meta.env.REACT_APP_FIREBASE_API_KEY,
//     authDomain: import.meta.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//     projectId: import.meta.env.REACT_APP_FIREBASE_PROJECT_ID,
//     storageBucket: import.meta.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: import.meta.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//     appId: import.meta.env.REACT_APP_FIREBASE_APP_ID,
//     measurementId: import.meta.env.REACT_APP_FIREBASE_MEASUREMENT_ID
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const API_KEY = import.meta.env.REACT_APP_FIREBASE_APP_KEY;
const PROJECT_ID = import.meta.env.REACT_APP_PROJECT_ID;
const APP_ID = import.meta.env.REACT_APP_FIREBASE_APP_ID;

export const updateSearchCount = async () => {
    console.log(API_KEY, PROJECT_ID, APP_ID);
}