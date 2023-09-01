//YOUR FIRE BASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyC5qS4ujgMcOD8dGrt_jpI0atrsXLx_zyY",
      authDomain: "classtest-94521.firebaseapp.com",
      databaseURL: "https://classtest-94521-default-rtdb.firebaseio.com",
      projectId: "classtest-94521",
      storageBucket: "classtest-94521.appspot.com",
      messagingSenderId: "463598204418",
      appId: "1:463598204418:web:85500ef8db43c2f475591b"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

UserName = localStorage.getItem("Username");
 document.getElementById("userwelcome").innerHTML = "Welcome, " + UserName + ".";


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
  row = "<div class = 'roomname' id ="+Room_names+" onclick='redirecttoroomname(this.id)'>Room"+Room_names+ "</div> <hr>";
  console.log(Room_names)
  document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();


function addRoom(){
      GetRoom = document.getElementById("roominput").value; 
      firebase.database().ref("/").child(GetRoom).update({
            purpose: "New Room"
      })
      localStorage.setItem("Roomname" , GetRoom);
      window.location = "kwitter_page.html";
      
}


function redirecttoroomname(name){
      console.log(Room_names);
      localStorage.setItem("RoomName" , name);
     
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("Username");
      localStorage.removeItem("RoomName");
      window.location = "index.html";
}