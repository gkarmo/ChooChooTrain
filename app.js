// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBnA4nnPlyvzqiaMzwAfzbN_HMS6C11uf8",
  authDomain: "choochootrain-17a0a.firebaseapp.com",
  databaseURL: "https://choochootrain-17a0a.firebaseio.com",
  projectId: "choochootrain-17a0a",
  storageBucket: "",
  messagingSenderId: "732377568440",
  appId: "1:732377568440:web:f8573634369e4c6a5bd04d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();

$("#add-train").on("click", function(event) {
  event.preventDefault();

  // Grabs user input
  var tName = $("#train-name").val().trim();
  // var destination = $("#destination").val().trim();
  // var firstTrain = moment($("#time").val().trim(), "MM/DD/YYYY").format("X");
  // var frequency = $("#frequency").val().trim();

  // Creates local "temporary" object for holding employee data
  var newTrain = {
    name: tName
    // dest: destination,
    // firstT: firstTrain,
    // freq: frequency
  };

  database.ref().push(newTrain);

  console.log(tName.name);
  // console.log(destination);
  // console.log(firstTrain.firstT);
  // console.log(frequency);

  alert("Train successfully added");
  
  $("#train-name").val("");


});
