//YOUR FIREBASE 
const Config = { 
      apiKey: "AIzaSyAVYDJcnAeuP1Rfv9jQG9oVHnJfSXmnQqQ", 
      authDomain: "kwitter-class-project-e0c2c.firebaseapp.com", 
      databaseURL: "https://kwitter-class-project-e0c2c-default-rtdb.firebaseio.com", 
      projectId: "kwitter-class-project-e0c2c", 
      storageBucket: "kwitter-class-project-e0c2c.appspot.com", 
      messagingSenderId: "283296757006", 
      appId: "1:283296757006:web:c1634ebf6e3a644932d35f", 
      measurementId: "G-ZWR5LYCZPW" 
};

firebase.initializeApp(config);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
