// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBYBn3lxGkj8aqeYjvveOGNnETmXt3f7U",
  authDomain: "firecontactbase-project.firebaseapp.com",
  databaseURL: "https://firecontactbase-project-default-rtdb.firebaseio.com",
  projectId: "firecontactbase-project",
  storageBucket: "firecontactbase-project.appspot.com",
  messagingSenderId: "748306189504",
  appId: "1:748306189504:web:3a93154d5e2c30425eb125"
};

// Initialize Firebase
const fireBase = initializeApp(firebaseConfig);

export default fireBase;