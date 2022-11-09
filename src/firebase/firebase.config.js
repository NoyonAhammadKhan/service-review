// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// require('dotenv').config();
const firebaseConfig = {
  apiKey: 'AIzaSyA1LqumyLFy_deK8aiSHmCriIsasPCRjoc',
  authDomain:'service-project-46f3f.firebaseapp.com',
  projectId: 'service-project-46f3f',
  storageBucket: 'ervice-project-46f3f.appspot.com',
  messagingSenderId:'902517895882',
  appId: '1:902517895882:web:fa74fce65cceaa3c587a33'

//   # REACT_APP_messagingSenderId=902517895882
// # REACT_APP_appId=1:902517895882:web:fa74fce65cceaa3c587a33

  // apiKey: process.env.REACT_APP_apiKey,
  // authDomain: process.env.REACT_APP_authDomain,
  // projectId: process.env.REACT_APP_projectId,
  // storageBucket: process.env.REACT_APP_storageBucket,
  // messagingSenderId:process.env.REACT_APP_messagingSenderId,
  // appId: process.env.REACT_APP_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;