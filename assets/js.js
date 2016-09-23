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
  
database.ref().on("child_added", function(lastTrainAdded){

  var infoGrabName = lastTrainAdded.val().name;
  var infoGrabDestination = lastTrainAdded.val().destination;
  var infoGrabTime = lastTrainAdded.val().trainTime;
  var infoGrabFrequency= lastTrainAdded.val().frequency;

//enters everything into the table
  $(".trainTable > tbody").append("<tr><td>" + infoGrabName + "</td><td>" + infoGrabDestination + "</td><td>" + infoGrabFrequency + "</td></tr>");

});
  
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

  

  database.ref().push(newTrainInfoJava);

  console.log(newTrainInfoJava);
  $('#tNameHtml').val("");
  $('#destinationHtml').val("");
  $('#tTimeHtml').val("");
  $('#frequencyHtml').val("");

return false;
});  
});

