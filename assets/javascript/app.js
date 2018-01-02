
// STOPWATCH ACTIVITY (SOLUTION)
// =============================

// This code will run as soon as the page loads
/*window.onload = function() {
//  $("#lap").on("click", stopwatch.recordLap);
  $("#stop").on("click", stopwatch.stop);
   $("#reset").on("click", stopwatch.reset);
  $("#start").on("click", stopwatch.start);
  console.log("window stopwatch start");
};

//  Variable that will hold our setInterval that runs the stopwatch
var intervalId;

//prevents the clock from being sped up unnecessarily
var clockRunning = false;

// Our stopwatch object
var stopwatch = {

  time: 20,
 // lap: 1,

  reset: function() {

    stopwatch.time = 20; // 0 time for stopwatch
 //   stopwatch.lap = 1;

    // DONE: Change the "display" div to "00:00."
    $("#display").text("00:20");

    // DONE: Empty the "laps" div.
    //$("#laps").text("");
  },
  start: function() {
         $("#time-left").text("15 seconds left");
         letsPlay=true; 
         stopwatch.start;
         console.log("START letsPlay " + letsPlay);
         if  ( letsPlay ) {
            $("#message").text("SELECT YOUR ANSWER BELOW");
            displayTimeLeft();
            letsPlay = playGame();
        }
        $("#start").attr("disabled","true");
        $("#start").attr("class","disabled");

    // DONE: Use setInterval to start the count here and set the clock to running.
    console.log("clockRunning " + clockRunning);

    if (!clockRunning) {
        intervalId = setInterval(stopwatch.count, 1000);
        clockRunning = true;
    }
  },
  stop: function() {

    // DONE: Use clearInterval to stop the count here and set the clock to not be running.
    clearInterval(intervalId);
    clockRunning = false;
  },*/
  /*recordLap: function() {

    // DONE: Get the current time, pass that into the stopwatch.timeConverter function,
    //       and save the result in a variable.
    var converted = stopwatch.timeConverter(stopwatch.time);

    // DONE: Add the current lap and time to the "laps" div.
    $("#laps").append("<p>Lap " + stopwatch.lap + " : " + converted + "</p>");

    // DONE: Increment lap by 1. Remember, we can't use "this" here.
    stopwatch.lap++;
  },
  count: function() {

    // DONE: increment time by 1, remember we cant use "this" here.
    //stopwatch.time++;
    if ( stopwatch.time > 0 )
    {
      stopwatch.time--;
      console.log("count " + stopwatch.time);
    }
    // DONE: Get the current time, pass that into the stopwatch.timeConverter function,
    //       and save the result in a variable.
    var converted = stopwatch.timeConverter(stopwatch.time);
    //if ( converted != "00:00" )
    // console.log("count converted " + converted);

    // DONE: Use the variable we just created to show the converted time in the "display" div.
    $("#display").text(converted);
  },
  timeConverter: function(t) {

    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (minutes === 0) {
      minutes = "00";
    }
    else if (minutes < 10) {
      minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
  }
};
*/

      var Questions = [ 'question1: what is favorite color?'];
      var Answers   = [ "A  blue", "B  green", "C  yellow", "D  purple"];
      var selectedAnswer = "none";
      var answerChosen = false;

      hideAnswerButtons();

      function hideAnswerButtons() {
        $("#answerSection").attr("class","hide");
        console.log("hideAnswerButtons");
      }

      function showAnswerButtons() {
        $("#answerSection").attr("class","show");
        $("#answerA").removeClass("selected");
        $("#answerB").removeClass("selected");
        $("#answerC").removeClass("selected");
        $("#answerD").removeClass("selected");
        console.log("showAnswerButtons");      
      }

      var userName = prompt("What's your name?");
      $("#name").text("Hi " + userName);
      var letsPlay = false;

      $("#time-left").text("15 seconds per question");
      $("#message").text("PRESS START TO BEGIN TRIVIA GAME");
      $("#questionSection").text("**** TRIVIA QUESTIONS ****");
      $("#start").click( function() { 
         $("#time-left").text("15 seconds left");
         letsPlay=true; 
         stopwatch.start;
         console.log("START letsPlay " + letsPlay);
         if  ( letsPlay ) {
            $("#message").text("SELECT YOUR ANSWER BELOW");
            displayTimeLeft();
            letsPlay = playGame();
        }
        $("#start").attr("disabled","true");
        $("#start").attr("class","disabled");
      });
  
      console.log("letsPlay before " + letsPlay);

      function displayTimeLeft () {
      
        console.log( "letsPlay " + letsPlay);

        // display question
        setTimeout(displayQuestion,10);
        timer.count;
        //setTimeout(timeUp,1000*15);
        //setTimeout(tenSeconds,1000*10);
        //setTimeout(fiveSeconds,1000*5); //dont need () inside setTimeout

      }

      function displayQuestion() {

        console.log("questionDisplay");

        $("#questionSection").text(Questions[0]);
        showAnswerButtons();
        
        $("#answerA").text(Answers[0]);
        $("#answerB").text(Answers[1]);
        $("#answerC").text(Answers[2]);
        $("#answerD").text(Answers[3]);
      }
/*
      function unselectButtons() {
         $("#answerA").removeClass("selected");
         $("#answerB").removeClass("selected");
         $("#answerC").removeClass("selected");
         $("#answerD").removeClass("selected");
      }
*/
      function playGame() {

       $("#answerA").click(function() {
          if ( answerChosen == false ){
            selectedAnswer = "A";
            console.log("playGame " + "A selected " + selectedAnswer);
            answerChosen = true;
            $("#message").text("You selected A");
            $("#answerA").attr("selected",true);
            $("#answerA").attr("class","selected");
        }
       });

       $("#answerB").click(function() {
          if ( answerChosen == false ) {
            selectedAnswer = "B";
            answerChosen = true;
            $("#message").text("You selected B");
            $("#answerB").attr("class","selected");
            console.log("playGame " + "B selected " + selectedAnswer);
          }
       });


       $("#answerC").click(function() {
          if ( answerChosen == false ) {
            selectedAnswer = "C";
            answerChosen = true;
            $("#message").text("You selected C");
            $("#answerC").attr("selected",true);
            $("#answerC").attr("class","selected");
            console.log("playGame " + "C selected " + selectedAnswer);
          }
       });


       $("#answerD").click(function() {
          if ( answerChosen == false ) {
            selectedAnswer = "D";
            answerChosen = true;
            $("#message").text("You selected D");
            $("#answerD").attr("selected",true);
            $("#answerD").attr("class","selected");
            console.log("playGame " + "D selected " + selectedAnswer);
          }
       });

       console.log("playGame " + "answer selected " + selectedAnswer);

       return false;
      }

      function fiveSeconds() {
        //var temp = "";
        $("#time-left").text("10 seconds left"); 
        console.log("10 seconds left -- 5 sec");
      }


      function tenSeconds() {
        $("#time-left").text("5 seconds left");
        console.log("5 sec left ten seconds passed ");
        //$("#answer").text(Answers[0]);
        // in the element with an id of time-left add an h2 saying About 5 Seconds Left!
        // console log 5 seconds left

      }


      function timeUp() {
        $("#time-left").text("times up");
        letsPlay = false;
        // in the element with an id of time-left add an h2 saying Time's Up!
        // console log done

        // The following line will play the audio file we linked to above.
        //audio.play();

      }




// Solution if you choose not to put it in an object

// var time = 0;
// var lap = 1;
// function reset() {

//   time = 0;
//   lap = 1;

//   $("#display").text("00:00");
//   $("#laps").text("");

// }

// function start() {
//   intervalId = setInterval(count, 1000);
// }

// function stop() {

//   console.log("stopping");
//   clearInterval(intervalId);

// }

// function recordLap() {

//   var converted = timeConverter(time);
//   $("#laps").append("<p>Lap " + lap + " : " + converted + "</p>");
//   lap++;

// }

// function count() {

//   time++;
//   var converted = timeConverter(time);
//   $("#display").text(converted);

// }

// function timeConverter(t) {

//   var minutes = Math.floor(t / 60);
//   var seconds = t - (minutes * 60);

//   if (seconds < 10) {
//     seconds = "0" + seconds;
//   }

//   if (minutes === 0) {
//     minutes = "00";
//   }
//   else if (minutes < 10) {
//     minutes = "0" + minutes;
//   }

//   return minutes + ":" + seconds;
// }
