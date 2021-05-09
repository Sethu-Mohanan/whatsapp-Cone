import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCOXeHAijJ1RX0H7NJE336DwHRy_nuF4rc",
    authDomain: "whatsapp-clone-919c8.firebaseapp.com",
    projectId: "whatsapp-clone-919c8",
    storageBucket: "whatsapp-clone-919c8.appspot.com",
    messagingSenderId: "1029981633212",
    appId: "1:1029981633212:web:d08bb5769ec90c9e60eeb9",
    measurementId: "G-T1GGVS1752"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;