import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAF5W1jPmOTQYwBNOse3ZS8pxXJBXLnQec",
    authDomain: "pf-foodier.firebaseapp.com",
    projectId: "pf-foodier",
    storageBucket: "pf-foodier.appspot.com",
    messagingSenderId: "682893785062",
    appId: "1:682893785062:web:c4b3fc11bb03bb16944827",
    measurementId: "G-DM0X1FZPGC"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
