// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// incluir as configurações obtidas no firebase console 
//
const firebaseConfig = {
    apiKey: "AIzaSyBUm3TThSw1S_C3I_RUtVv9TN2byYytoDU",
    authDomain: "usabilidade13-10.firebaseapp.com",
    databaseURL: "https://usabilidade13-10-default-rtdb.firebaseio.com",
    projectId: "usabilidade13-10",
    storageBucket: "usabilidade13-10.appspot.com",
    messagingSenderId: "560586605846",
    appId: "1:560586605846:web:052675689f222b71e17c37"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database
