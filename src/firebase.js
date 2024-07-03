import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAXUDkw5E-VYdnQe3LaLrIPK53XSNFacpc",
    authDomain: "regform-aaa31.firebaseapp.com",
    projectId: "regform-aaa31",
    storageBucket: "regform-aaa31.appspot.com",
    messagingSenderId: "882747515328",
    appId: "1:882747515328:web:1c4a8f38f50a84b3292825",
    measurementId: "G-3YG524H4N2"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };


