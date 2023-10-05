// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyCqk9nPwRpDQC0E-xgdajKat9SSzOqK4uE",
      authDomain: "kwitter-app-761ed.firebaseapp.com",
      databaseURL: "https://kwitter-app-761ed-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-761ed",
      storageBucket: "kwitter-app-761ed.appspot.com",
      messagingSenderId: "145192373481",
      appId: "1:145192373481:web:8bf607a819b19fe7d1f478"
};

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  console.log("Room Name - " + Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)'> #" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
            });
      });
}
getData();

name = localStorage.getItem("user_name");
document.getElementById("user").innerHTML = "Welcome " + name;

function addRoom() {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}