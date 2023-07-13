import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB1588kKBUXF5top9UxNCQdnC6h5xSCdZg",
    authDomain: "mythree-org.firebaseapp.com",
    projectId: "mythree-org",
    storageBucket: "mythree-org.appspot.com",
    messagingSenderId: "946128923664",
    appId: "1:946128923664:web:69418c6e093cb16e72ee95",
    measurementId: "G-EY4YR1FWLE"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);