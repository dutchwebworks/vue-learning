import { initializeApp } from "firebase";

const app = initializeApp({
    apiKey: "AIzaSyCH1nA2ONwMuUR40sMjIosUj-5_qDBKS98",
    authDomain: "vue-learning-4ae11.firebaseapp.com",
    databaseURL: "https://vue-learning-4ae11.firebaseio.com",
    projectId: "vue-learning-4ae11",
    storageBucket: "vue-learning-4ae11.appspot.com",
    messagingSenderId: "1046113302284",
    appId: "1:1046113302284:web:464f1799e926674793fb29"
});

export const db = app.database();
export const usersRef = db.ref("users");
export const gamesRef = db.ref("games");