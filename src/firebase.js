import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD94bLfifrHSCJkCYmJKEOoNUmHMX3moY4",
    authDomain: "netflix-clone2-a9ccb.firebaseapp.com",
    projectId: "netflix-clone2-a9ccb",
    storageBucket: "netflix-clone2-a9ccb.appspot.com",
    messagingSenderId: "645951841372",
    appId: "1:645951841372:web:81ae4dbdb8b0f0b8e17299"
  };


  const firebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseApp);
  export const auth = getAuth(firebaseApp);  
  export default db;