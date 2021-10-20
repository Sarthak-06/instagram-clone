// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseApp = firebase.initializeApp(
 {
    apiKey: "AIzaSyBEnmdWYRf66iRYszGM3rOmkYA0NdKUwrc",
    authDomain: "instagram-clone-8cfc1.firebaseapp.com",
    databaseURL: "https://instagram-clone-8cfc1-default-rtdb.firebaseio.com",
    projectId: "instagram-clone-8cfc1",
    storageBucket: "instagram-clone-8cfc1.appspot.com",
    messagingSenderId: "825376854111",
    appId: "1:825376854111:web:02bf5641f3bbfdea26cbea",
    measurementId: "G-VV8TS7MJ3M"
  });
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
 export default firebase;
  const storage=firebase.storage();
  export {db,auth,storage,firebase};