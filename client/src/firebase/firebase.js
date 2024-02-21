// firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCPaUdMpU2ev-2Jgrzgq8dVusSbYnfBj7s",
    authDomain: "chiniapp-895b8.firebaseapp.com",
    projectId: "chiniapp-895b8",
    storageBucket: "chiniapp-895b8.appspot.com",
    messagingSenderId: "188088342779",
    appId: "1:188088342779:web:03d6957ec42d0ef7bc785e",
    databaseURL: "https://chiniapp-895b8-default-rtdb.firebaseio.com",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getDatabase(firebaseApp);

export default db;