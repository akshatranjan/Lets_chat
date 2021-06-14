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

room_name = localStorage.getItem("room_name");
username = localStorage.getItem("username");

function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        message:msg,
        name:username,
        likes:0
    })
    document.getElementById("msg").value = "";
}

function logout()
{
    localStorage.removeItem("username");
    localStorage.removeItem("room_name");
    window.location.replace("index.html");
}

