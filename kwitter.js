var firebaseConfig = {
    apiKey: "AIzaSyAABVSOWulaUDI4lyKyfqk0zXND-duADhk",
    authDomain: "kwitter-support.firebaseapp.com",
    databaseURL: "https://kwitter-support-default-rtdb.firebaseio.com",
    projectId: "kwitter-support",
    storageBucket: "kwitter-support.appspot.com",
    messagingSenderId: "930697911330",
    appId: "1:930697911330:web:10ea6a03dbd74e97817e7b",
    measurementId: "G-J7G6TKPKH3"
  };

firebase.initializeApp(firebaseConfig);

function malinade(){
    var jake= document.getElementById("gone").value;
    localStorage.setItem("name", jake);
    window.location="kwitter_room.html";
}