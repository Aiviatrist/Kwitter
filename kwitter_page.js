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
 
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
a_name= message_data["name"];
a_message= message_data["msg"];
a_like= message_data["likes"];
newt="<h4>"+a_name+"<img class='user_tick' src='tick.png'></h4>";
mesgt="<h4 class='message_h4'>"+a_message+"</h4>";
likebut="<button class='btn btn-info' id="+firebase_message_id+" value="+a_like+"onclick='updatelike(this.id)'>";
spantag="<span class='glyphicon glyphicon-thumbs-up'>likes:"+a_like+"</span></button><hr>";
row=newt+mesgt+likebut+spantag;
document.getElementById("output")+=row;
//End code
      } });  }); }
getData();

function type(){
      var bolt=document.getElementById("radical").value;
      firebase.database().ref(room_name).push({
            name:jake,
            likes:0,
            msg:bolt
      });
      document.getElementById("radical").value="";
}
function updatelike(message_id){
      button_id=message_id;
      nog=document.getElementById("button_id").value;
      update=Number(nog)+1;
      firebase.database().ref(room_name).child(message_id).update({
       likes:update
      });
}