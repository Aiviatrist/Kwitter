
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
 
      function keloggs(){
           room_name=document.getElementById("kool").value;
           firebase.database().ref("/").child(room_name).update({
                   purpose="adding roomname"
           });
           localStorage.setItem("roomname",room_name);
           window.location="kwitter_page.html";
                               
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      
      var row="<div class='container' id="+Room_names+"onclick='redirectToRoomname(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      });});}
getData();
function redirectToRoomname(name){
      localStorage.setItem("roomname",name);
      window.location ="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("name");
      localStorage.removeItem("roomname");
      window.location="index.html";
}