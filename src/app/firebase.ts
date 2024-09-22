// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDcu6wNRe9byD8MqyE1bRLbsvJr_VrLQgE",
  authDomain: "euro-kontrakan.firebaseapp.com",
  projectId: "euro-kontrakan",
  storageBucket: "euro-kontrakan.appspot.com",
  messagingSenderId: "965836662913",
  appId: "1:965836662913:web:36433ad0e390579e270580",
  measurementId: "G-FWK61QFPYW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);

export {storage}