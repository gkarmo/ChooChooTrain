
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

  var db = firebase.database();

$(document).ready(function() {


  $("#add-train").on("click", function(event) {
    console.log("click");

    
    var firstTrain = '';
    var nextArrival = moment().startOf(firstTrain).fromNow();

    var name = $("#train-name")
      .val()
      .trim();
    var destination = $("#destination")
      .val()
      .trim();
    var frequency = $("#frequency")
      .val()
      .trim();

    //tbody
    var $tbody = $table.append("<tbody />").children("tbody");

    // add row
    $tbody
      .append("<tr />")
      .children("tr:last")
      .append("<td>" + name + "</td>")
      .append("<td>" + destination + "</td>")
      .append("<td>" + frequency + "</td>");

    $("#train-name").val("");
    $("#destination").val("");
    $("#frequency").val("");



  });
});
