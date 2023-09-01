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
RoomName = localStorage.getItem("RoomName");

function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(RoomName).push({
        name: UserName,
        message: msg,
        like: 0
    });
    document.getElementById("msg").value = "";
}

function getData() {
    firebase.database().ref("/" + RoomName).on('value', function (snapshot) {
                document.getElementById("output").innerHTML = "";
                snapshot.forEach(function (childSnapshot) {
                            childKey = childSnapshot.key;
                            childData = childSnapshot.val();
                            if (childKey != "purpose") {
                                firebase_message_id = childKey;
                                message_data = childData;
                                name1 = message_data['name'];
                                message = message_data['message'];
                                like = message_data['like'];

                               

                                name_with_tag = "<h4>"+name1+"</h4>";
                            message_with_tag = "<h4 class = 'message_h4'>"+message+"</h4>";
                        like_button = "<button class= 'btn btn-info' id="+firebase_message_id+" value="+ like+ " onclick='updatelikes(this.id)'>";
                        span_with_tag = "<span class = 'glyphicon glyphicon-thumbs-up'>Likes: "+like+"</span></button><hr>";
                        row = name_with_tag+message_with_tag+like_button+span_with_tag;
                        document.getElementById("output").innerHTML +=row;
                    }



                        });
                    });
                };

                getData();

                function updatelikes(messageid){
                    buttonid = messageid;
                    likes = document.getElementById(buttonid).value;
                    console.log(likes)
                    updatedlike = Number(likes)+1;
                   
                   // document.getElementById(buttonid).className += " disabled";
                    firebase.database().ref(RoomName).child(messageid).update({
                        like : updatedlike
                    });
                };