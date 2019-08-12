$(document).ready(function() {
  $("#add-train").on("click", function(event) {
    console.log("click");
    var name = $("#train-name").val().trim();
    var destination = $("#destination").val().trim();



// create table
var $table = $('<table>');
// caption
$table.append('<caption>MyTable</caption>')
// thead
.append('<thead>').addClass("thead-dark").children('thead')
.append('<tr />').children('tr').append('<th>Train Name</th><th>Destination</th>');

//tbody
var $tbody = $table.append('<tbody />').children('tbody');

// add row
$tbody.append('<tr />').children('tr:last')
.append("<td>" + name + "</td>")
.append("<td>" + destination + "</td>");



// add table to dom
$table.appendTo('#trains');
 

    //   .append("<td>" + name + "</td>")
    //   .append("<td>" + destination + "</td>");

    $("#train-name").val("");
    $("#destination").val("");
  });
});
