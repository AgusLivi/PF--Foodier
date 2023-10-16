import { initializeApp } from "firebase/app";
import { getAuth, FacebookAuthProvider } from "firebase/auth";

const FBConfig = import.meta.env

const firebaseConfig = {
    apiKey: FBConfig.VITE_REACT_APP_API_KEY,
    authDomain: FBConfig.VITE_REACT_APP_AUTH_DOMAIN,
    projectId: FBConfig.VITE_REACT_APP_PROJECT_ID,
    storageBucket: FBConfig.VITE_REACT_APP_STORAGE_BUCKET,
    messagingSenderId: FBConfig.VITE_REACT_APP_MESSAGIN_ID,
    appId: FBConfig.VITE_REACT_APP_APP_ID,
    measurementId: FBConfig.VITE_REACT_APP_MEASUREMENT_ID
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new FacebookAuthProvider();

export { auth, provider };
