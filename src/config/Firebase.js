import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBzwLf3aMGG7lWkO75jjY_Wu8zgZyPmG3Y",
  authDomain: "pic-viewer-74c17.firebaseapp.com",
  projectId: "pic-viewer-74c17",
  storageBucket: "pic-viewer-74c17.appspot.com",
  messagingSenderId: "696674365850",
  appId: "1:696674365850:web:9df751a03448004f190a23",
};
firebase.initializeApp(firebaseConfig);
//const db = firebase.firestore();
const storageFire = firebase.storage();

export { storageFire };
