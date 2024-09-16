import { initializeApp, getApps } from 'firebase/app';
import { initializeAuth, getAuth, browserLocalPersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getReactNativePersistence } from 'firebase/auth/react-native';

const firebaseConfig = {
    apiKey: "AIzaSyB5QpiXMKOUkaJGG1jJnwAZHlmUIQRglNY",
    authDomain: "pluesoft-a6d22.firebaseapp.com",
    projectId: "pluesoft-a6d22",
    storageBucket: "pluesoft-a6d22.appspot.com",
    messagingSenderId: "17598992931",
    appId: "1:17598992931:web:a6c139260ab5cb88cdd796"
  };

let auth;

if (!getApps().length) {
  const app = initializeApp(firebaseConfig);
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
  });
} else {
  auth = getAuth();
}

export { auth };
