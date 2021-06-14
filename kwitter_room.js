var firebaseConfig = {
    apiKey: "AIzaSyDhjC3b6tw0XBDgvaQJqLVZayNrwVKnP8U",
    authDomain: "let-s-chat-e5c1e.firebaseapp.com",
    databaseURL: "https://let-s-chat-e5c1e-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-e5c1e",
    storageBucket: "let-s-chat-e5c1e.appspot.com",
    messagingSenderId: "217922179823",
    appId: "1:217922179823:web:1c42c4e2d8d80ae014c11a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  

  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
      purpose:"adding room_name",
    })
  }

  function getData() {firebase.database().ref("/").on('value', function(snapshot) 
  {document.getElementById("output").innerHTML ="";
  snapshot.forEach(function(childSnapshot) 
  {childKey = childSnapshot.key;
 Room_names = childKey;
 //Start code
 console.log("Room Name - " + Room_names);
 row = "<div id="+Room_names+" class='room_name' onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>"
document.getElementById("output").innerHTML += row;
 //End code
 });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout()
{
    localStorage.removeItem("username");
    localStorage.removeItem("room_name");
    window.location.replace("index.html");
}