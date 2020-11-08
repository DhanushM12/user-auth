import firebase from "firebase";
// web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKaKACNzrT1_gElq7oi72Qgduby1QyS8A",
  authDomain: "user-auth-4d021.firebaseapp.com",
  databaseURL: "https://user-auth-4d021.firebaseio.com",
  projectId: "user-auth-4d021",
  storageBucket: "user-auth-4d021.appspot.com",
  messagingSenderId: "254565014678",
  appId: "1:254565014678:web:69bd40ecf9546bfa6376b7",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
