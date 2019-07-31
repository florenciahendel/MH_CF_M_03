// src/fire.js
import firebase from 'firebase'
var config = {
  apiKey: "AIzaSyChtuQlpTaA6z0gXdvGOh_DqabY0ButEk8",
    authDomain: "sarasadeprueba.firebaseapp.com",
    databaseURL: "https://sarasadeprueba.firebaseio.com",
    projectId: "sarasadeprueba",
    storageBucket: "",
    messagingSenderId: "193693937097",
    appId: "1:193693937097:web:1ce2aacecb939772"

};
var fire = firebase.initializeApp(config);
export default fire;