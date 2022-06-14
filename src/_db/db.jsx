import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCW5-RcOwqScsyoidxB0Nhy8arJNU87VF8',
  authDomain: 'final-project-17d17.firebaseapp.com',
  databaseURL: 'https://final-project-17d17-default-rtdb.firebaseio.com',
  projectId: 'final-project-17d17',
  storageBucket: 'final-project-17d17.appspot.com',
  messagingSenderId: '551293882198',
  appId: '1:551293882198:web:ece02f536d0ff8724d10f7',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db;
