import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyCm6qK_c07HkrGPhcxso_37H0rpuy1mHhQ",
  authDomain: "agenda-avancada.firebaseapp.com",
  projectId: "agenda-avancada",
  storageBucket: "agenda-avancada.appspot.com",
  messagingSenderId: "711971505229",
  appId: "1:711971505229:web:60d323068aa2533e730804",
  measurementId: "G-51XYTXDY6D"
  };

  const firebaseApp = initializeApp(firebaseConfig);

  const db = getFirestore(firebaseApp)
  const auth = getAuth(firebaseApp)

  export { db, auth }