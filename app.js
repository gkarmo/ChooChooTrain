// Your web app's Firebase configuration
var config = {
  apiKey: "AIzaSyBnA4nnPlyvzqiaMzwAfzbN_HMS6C11uf8",
  authDomain: "choochootrain-17a0a.firebaseapp.com",
  databaseURL: "https://choochootrain-17a0a.firebaseio.com",
  projectId: "choochootrain-17a0a",
  storageBucket: "choochootrain-17a0a.appspot.com",
  messagingSenderId: "732377568440",
  appId: "1:732377568440:web:f8573634369e4c6a5bd04d"
};
// Initialize Firebase
firebase.initializeApp(config);

var database = firebase.database();

// 2. Button for adding Employees
$("#add-new-train").on("click", function(event) {
  event.preventDefault();
  console.log("click");

  // Grabs user input
  var tName = $("#train-name").val().trim();
  var destination = $("#destination").val().trim();
  var firstTrain = moment($("first-train").val(), "HH:mm").format("X");
  var frequency = $("#frequency").val().trim();

  // Creates local "temporary" object for holding employee data
  var newTrain = {
    name: tName,
    dest: destination,
    fTrain: firstTrain,
    freq: frequency
  };

  // Uploads employee data to the database
  database.ref().push(newTrain);

  // Logs everything to console
  console.log(tName.name);
  console.log(destination.dest);
  console.log(firstTrain.fTrain);
  console.log(frequency.freq);

  alert("Train successfully added");

  // Clears all of the text-boxes
  $("#train-name").val("");
  $("#destination").val("");
  $("#first-train").val("");
  $("#frequency").val("");
});

database.ref().on("child_added", function(childSnapshot) {
  console.log(childSnapshot.val());

  // Store everything into a variable.
  var tName = childSnapshot.val().name;
  var destination = childSnapshot.val().dest;
  var firstTrain = childSnapshot.val().fTrain;
  var frequency = childSnapshot.val().freq;

  console.log(tName);
  console.log(destination);
  console.log(firstTrain);
  console.log(frequency);

  var timeDiff = moment().diff(moment.unix(firstTrain), "minutes") % frequency;

  var minAway = frequency - timeDiff;

  var nextArr = moment().add(minAway, "m").format("HH:mm");

  var newRow = $("<tr>").append(
    $("<td>").text(tName),
    $("<td>").text(destination),
    $("<td>").text(frequency),
    $("<td>").text(nextArr),
    $("<td>").text(minAway)
  );

  $("#employee-table > tbody").append(newRow);
});


