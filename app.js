var moment = require("moment");

$(document).ready(function() {
  // create table
  var $table = $("<table>").addClass("table");
  $table
    // thead
    .append("<thead>")
    .children("thead")
    .append("<tr />")
    .children("tr")
    .append(
      "<th>Train Name</th><th>Destination</th><th>Frequency</th><th>Next Arrival</th><th>Mins Away</th>"
    );

  $table.appendTo("#trains");

  $("#add-train").on("click", function(event) {
    console.log("click");
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
