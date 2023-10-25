
var firebaseConfig = {
  apiKey: "AIzaSyDLI5x42e3mmkUEQm3LYR5syf0Y71SqkFs",
  authDomain: "letschat-web-app-59b5d.firebaseapp.com",
  databaseURL: "https://letschat-web-app-59b5d-default-rtdb.firebaseio.com/",
  projectId: "letschat-web-app-59b5d",
  storageBucket: "letschat-web-app-59b5d.appspot.com",
  messagingSenderId: "446275014177",
  appId: "1:446275014177:web:a280869fb850f67c2f1d60"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
//End code
});
});

}




getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = ("index.html");
}

