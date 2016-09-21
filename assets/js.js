// Link to FireBase
  var config = {
    apiKey: "AIzaSyBe7qYOChZf1HIyO9vq7-pGSWVFNAsePjo",
    authDomain: "train-sched-50f78.firebaseapp.com",
    databaseURL: "https://train-sched-50f78.firebaseio.com",
    storageBucket: "train-sched-50f78.appspot.com",
    messagingSenderId: "874900335616"
  };
  firebase.initializeApp(config);
  var database = firebase.database();

// User inputs 
$(document).ready(function(){
  
$(document).on("click", "#submitHtml", function(){
  var trainNameJava = $('#tNameHtml').val().trim();
  var trainDestinationJava = $('#destinationHtml').val().trim();
  var tTimeJava = moment($("#tTimeHtml").val().trim());
  var frequencyJava = $('#frequencyHtml').val().trim();

// console.log 
console.log(trainNameJava, trainDestinationJava, tTimeJava, frequencyJava);

  var newTrainInfoJava = {
    name: trainNameJava,
    destination: trainDestinationJava,
    trainTime: tTimeJava,
    frequency: frequencyJava
  }

  //enters everything into the table
  $(".trainTable").append("<tr><td>" + trainNameJava + "</td><td>" + trainDestinationJava + "</td><td>" + frequencyJava + "</td></tr>");

  database.ref().push(newTrainInfoJava);

  console.log(newTrainInfoJava);
  $('#tNameHtml').val("");
  $('#destinationHtml').val("");
  $('#tTimeHtml').val("");
  $('#frequencyHtml').val("");

return false;
});  
});

