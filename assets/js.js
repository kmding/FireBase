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

database.ref().on("child_added", function(lastTrainAdded){

  var infoGrabName = lastTrainAdded.val().name;
  var infoGrabDestination = lastTrainAdded.val().destination;
  var infoGrabTime = lastTrainAdded.val().trainTime;
  var infoGrabFrequency= lastTrainAdded.val().frequency;
  var infoGrabArrival = lastTrainAdded.val().nextArrival;
  var infoGrabMinAway = lastTrainAdded.val().minutesAway;
//enters everything into the table
  $(".trainTable > tbody").append("<tr><td>" + infoGrabName + "</td><td>" + infoGrabDestination + "</td><td>" + infoGrabFrequency + "</td><td>" + infoGrabArrival + "</td><td>" + infoGrabMinAway + "</td></tr>");

});
  
$("#submitHtml").on("click", function(){
  var trainNameJava = $("#tNameHtml").val().trim();
  var trainDestinationJava = $("#destinationHtml").val().trim();
  var tTimeJava = $("#tTimeHtml").val().trim();
  var frequencyJava = $("#frequencyHtml").val().trim();

// console.log 
console.log(trainNameJava + trainDestinationJava + tTimeJava + frequencyJava);

// the math
  // First Time (pushed back 1 year to make sure it comes before current time)
    var firstTimeConverted = moment(tTimeJava,"hh:mm").subtract(1, "years");
    console.log(firstTimeConverted);
    // Current Time
    var currentTime = moment();
    console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));
    // Difference between the times
    var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
    console.log("DIFFERENCE IN TIME: " + diffTime);
    // Time apart (remainder)
    var tRemainder = diffTime % frequencyJava;
    console.log(tRemainder);
    // Minute Until Train
    var tMinutesTillTrain = frequencyJava - tRemainder;
    console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);
    // Next Train
    var nextTrain = moment().add(tMinutesTillTrain, "minutes").format("hh:mm a");
    console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm a"))
  
  var newTrainInfoJava = {
    name: trainNameJava,
    destination: trainDestinationJava,
    trainTime: tTimeJava,
    frequency: frequencyJava,
    nextArrival: nextTrain,
    minutesAway: tMinutesTillTrain
  }

  database.ref().push(newTrainInfoJava);

  console.log(newTrainInfoJava);
  $('#tNameHtml').val("");
  $('#destinationHtml').val("");
  $('#tTimeHtml').val("");
  $('#frequencyHtml').val("");

return false;
});  


