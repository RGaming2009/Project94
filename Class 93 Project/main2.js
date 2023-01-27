//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAmmExtv-ajLdmQq6bad_iyqUhhbj8gSqQ",
    authDomain: "project-94-d7b18.firebaseapp.com",
    databaseURL: "https://project-94-d7b18-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "project-94-d7b18",
    storageBucket: "project-94-d7b18.appspot.com",
    messagingSenderId: "568287065205",
    appId: "1:568287065205:web:6320f8810f0c8a1df7f43c"
  };

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code

   //End code
   });});}
getData();
