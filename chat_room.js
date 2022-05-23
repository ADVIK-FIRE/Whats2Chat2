function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code

   //End code
   });});}
getData();

var firebaseConfig = {
    apiKey: "AIzaSyBGsV7sjvloNYPVakngzj_GbTeBaK3ZEoE",
    authDomain: "advikwitter-a17ea.firebaseapp.com",
    databaseURL: "https://advikwitter-a17ea-default-rtdb.firebaseio.com",
    projectId: "advikwitter-a17ea",
    storageBucket: "advikwitter-a17ea.appspot.com",
    messagingSenderId: "684824787206",
    appId: "1:684824787206:web:14e9828ced227143ac8687",
    measurementId: "G-213H52SFFY",
  };
  
  // Initialize Firebase
  firebase.app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);