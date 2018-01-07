// "document.ready" makes sure that our JavaScript doesn't get run until the HTML document is finished loading.
$(document).ready(function() {

      var triviaObject = [
         {
           Question:"what is most popular color?",
           Answers:["A  blue", "B  green", "C  yellow", "D  purple"],
           correctAnswer:'A'
         },
         {
           Question:"what is most popular junk food?",
           Answers:["A fries","B chocolate","C ice cream","D donuts"],
           correctAnswer:'B'
         },
         {
           Question:"what is most popular soda?",
           Answers: ["A pepsi","B ginger ale","C coke","D 7up"],
           correctAnswer:'C'
         }
      ]

     console.log("triviaObject q "+triviaObject[0].Question);
     console.log("triviaObject ans "+triviaObject[0].Answers);
     console.log("triviaObject q "+triviaObject[0].correctAnswer);

      // var Questions = [ 'what is favorite color?',
      //                   "what is favorite food?",
      //                   "what is favorite soda?" ];
      // var Answers   = [ "A  blue", "B  green", "C  yellow", "D  purple",
      //                   "A fries","B chocolate","C ice cream","D donuts",
      //                   "A pepsi","B ginger ale","C coke","D 7up"];
      //   var correctAnswer = ['A','B','C','none'];
      // var selectedAnswer = "none";

      var randomQuestions = [99,99,99];
      var questionOptions = [0,1,2];
      var answerChosen = false;
      var secondCount = 0;
      var questionNumber = 0;
      var maxQuestions = 3;
      var wrongCount = 0;
      var correctCount = 0;
      var unansweredCount = 0;
      var t1 = 0, t2 = 0, t3 = 0;
      var timeToAnswer = 10; //20;
      var timeBetweenQuestions = 3*1000;
      var timeBetweenGames = 10*1000;
      var gameComplete = false;
      var debug = false;
      var test =0;
      var letsPlay = false;

     // hideAnswerButtons();
// *********************************************************
      function displayCounts() {
        console.log("correctCount "+ correctCount);
        console.log("wrongCount "+ wrongCount);
        console.log("unansweredCount "+unansweredCount);
        console.log("number of questions "+ maxQuestions);
        console.log("questionNumber "+questionNumber); 
        console.log("gameComplete "+gameComplete);
      }

  function displayFinalCounts() {
    hideAnswerButtons();
    $("#time-left").text("Thank you");
    $("#message").text("for playing ");
    $("#message2").text("TRIVIA GAME!!!");
    $("#resultsSection").removeClass("hide");
    $("#resultsHeader").text("From "+maxQuestions+" questions");
    $("#finalCorrectCount").text("Correct Answers: "+correctCount);        
    $("#finalWrongCount").text("Wrong Answers: "+wrongCount);
    $("#finalUnansweredCount").text("Unanswered: "+unansweredCount);
  }
// **********************************************************
  function hideAnswerButtons() {
    $("#answerSection").attr("class","hide");
        //console.log("hideAnswerButtons");
  }
// *********************************************************
  function showAnswerButtons() {
    $("#answerSection").attr("class","show"); 
    $("#answerA").removeClass("selected");
    $("#answerB").removeClass("selected");
    $("#answerC").removeClass("selected");
    $("#answerD").removeClass("selected");
    answerChosen = false;      
  } // end showAnswerButtons
// *********************************************************
      //var userName = prompt("What's your name?");
      //$("#name").text("Hi " + userName);
     //
      var letsPlay = false;
// *********************************************************      
      function displayFirstMessages() {
      $("#time-left").text(timeToAnswer+" seconds per question");
      $("#message").text("PRESS START TO BEGIN TRIVIA GAME");
      $("#message2").text("Good Luck!!!");
      $("#questionSection").text("**** TRIVIA QUESTIONS ****");
      }
// *********************************************************
// *********************************************************

      hideAnswerButtons();
      displayFirstMessages();
      gameComplete = false;
      $("#start").click( function() { 
      $("#message").text("START");
      if ( secondCount )
        $("#time-left").text("Time Remaining: "+secondCount +" seconds");
      letsPlay=true; 
        if  ( letsPlay ) {
          $("#message2").text("SELECT YOUR ANSWER BELOW");
          secondCount=timeToAnswer+1; //test
          displayTimeLeft();
          letsPlay = playGame();
          //console.log("playGame returns letsPlay "+letsPlay);
        }

  //      $("#start").attr("disabled","true");
    //    $("#start").attr("class","disabled");
        $("#start").attr("class","hide");

      }); // end start click function
// *********************************************************
      //console.log("letsPlay before " + letsPlay);

  function displayTimeLeft() {
      
        //console.log( "displayTimeLeft letsPlay " + letsPlay);
        if ( gameComplete )
        {
          //if ( t2 )
          //  clearTimeout(t2);
          //if ( t3 )
          //  clearTimeout(t3);
          if (debug)
            console.log(" dtl gc return")
          return;
        }
        console.log( "**** dtl q "+(questionNumber+1)+" secondcount "+secondCount);
 
        // display question for first question
        if ( !questionNumber )
        {
           //t3 = setTimeout(displayQuestion,10);
           t3 = setTimeout(displayQuestion,900);//test
           t2 = setTimeout(countSeconds,1000); // displayTimeLeft questionNumber 0
           //t3 = setTimeout(displayQuestion,1000);
           if ( debug )
           console.log("dtl countSeconds 1cs dq0 questionNumber "+questionNumber);
        }
        else  // display question for rest of questions
        {
           if ( debug )
           console.log("dtl questionNumber "+questionNumber+" t2 t3 clearTimeout");
           //if ( t2 )
           //  clearTimeout(t2);
           //if ( t3 )
           //  clearTimeout(t3);
           if ( questionNumber < maxQuestions )
           {
             secondCount=timeToAnswer+1;
             t3 = setTimeout(displayQuestion,900);//test
             t2 = setTimeout(countSeconds,1000); //displayTimeLeft q < max
           }
        }

  } // end displayTimeLeft

// *********************************************************
  function countSeconds() {
        // if time left
         // console.log("1countSeconds count is " + count); 
           //var id = setInterval(countSeconds, 1000);
           //clearInterval(id);
       test++;
       console.log("test ",test);

       if ( gameComplete )
       {
        //console.log("cs gc return");
        return;
       }
       if ( questionNumber < maxQuestions ) {  

        if ( secondCount ) {
          secondCount--;
     //test     $("#time-left").text("Time Remaining: "+ secondCount +" seconds");

          if ( secondCount < 4) 
          {
            if ( debug )
              console.log("2 countSeconds count is " + secondCount+ " answer "+answerChosen+" question "+questionNumber);
          }
          if ( !answerChosen )
          {
            //console.log("cs if no answer call cs again");
            t2 = setTimeout(countSeconds,1000); //cs if no answerChosen
          }
       /*   else
          {
            if ( debug )
              console.log("cs clearTimeout t3 dc count "+secondCount + " question "+questionNumber+" answer "+answerChosen);
            if (t3)
             clearTimeout(t3);
            //displayCounts();
          }
       */
         $("#time-left").text("Time Remaining: "+ secondCount +" seconds");

        } // end secondCount
        else
        {
         if ( !answerChosen ) {
            //console.log("cs NA before timeUp secondcount "+secondCount);
            timeUp();
            //console.log("cs NA times up secondcount " + secondCount);
          }
        }

    } // end questionNumber < maxQuestions

  } // end countSeconds

// *********************************************************
  function afterAnswer() {

    answerChosen = true;
        //console.log("AA question "+ questionNumber+" set answerChosen to true");
        
                $("#message").text("You selected "+selectedAnswer);
                $("#answer"+selectedAnswer).attr("selected",true);
                $("#answer"+selectedAnswer).attr("class","selected");
             //  if ( questionNumber < (maxQuestions-1) )
             //  { 
            if ( selectedAnswer === triviaObject[questionNumber].correctAnswer )
              {
                $("#time-left").text("Woo Hoo! YOU ARE CORRECT!");
                $("#message").text("You chose "+selectedAnswer);
                //test if ( questionNumber < (maxQuestions-1) )
                if ( questionNumber < (maxQuestions) )
                {
                   correctCount++;
                   if ( debug )
                   console.log("aa increase correctCount new"+correctCount);
                 }
                //displayCounts();
              }
            else
            {
              $("#time-left").text("Oh no... Correct Answer was "+triviaObject[questionNumber].correctAnswer);
              console.log("aa Oh no... Correct Answer was "+triviaObject[questionNumber].correctAnswer);
                if ( (wrongCount + correctCount + unansweredCount) < maxQuestions )
                {
                   wrongCount++;
                   //if ( debug )
                     console.log("aa increase wrongCount new "+wrongCount);
                } 
                else
                  if ( debug )
                    console.log("aa do not increase wrongCount???");          
            }

          if ( (wrongCount + correctCount + unansweredCount) >= maxQuestions)
          {
            if ( debug )
            console.log("AA set gameComplete");
            gameComplete = true;
            $("#questionSection").text("**** TRIVIA QUESTIONS ****");
            setTimeout(restartGame,timeBetweenGames);
            displayFinalCounts();
          }

          //displayCounts();            
    

     // }
            //console.log("AA secondCount "+secondCount);
            //console.log("AA before set count to 0 secondcount is "+secondCount);
            //test
            //secondCount = 0;
            //console.log("aa inc questionNumber");
            //questionNumber++;
            //console.log("aa before questionNumber "+questionNumber);
            if ( questionNumber < (maxQuestions-1) )
            {
              questionNumber++;
              if ( debug )
              console.log("aa increased questionNumber new " + questionNumber);
              //console.log("aa call dtl ");
              t1 = setTimeout(displayTimeLeft,timeBetweenQuestions);
            }
            if ( debug )
            {
              console.log("aa end before dc ");
              displayCounts();
            }
      } // end afterAnswer

// *********************************************************
  function displayQuestion() {

      if ( questionNumber < maxQuestions ) {
       console.log("displayQuestion " + questionNumber+" count "+secondCount);
       $("#message").text("*** Question "+(questionNumber+1)+" ***");
       $("message2").text("*** SELECT ANSWER BELOW ***")
       $("#questionSection").text(triviaObject[questionNumber].Question);
       showAnswerButtons();

       $("#answerA").text(triviaObject[questionNumber].Answers[0]);
       $("#answerB").text(triviaObject[questionNumber].Answers[1]);
       $("#answerC").text(triviaObject[questionNumber].Answers[2]);
       $("#answerD").text(triviaObject[questionNumber].Answers[3]);

    //   $("#answerA").text(Answers[0+(4*questionNumber)]);
    //   $("#answerB").text(Answers[1+(4*questionNumber)]);
    //   $("#answerC").text(Answers[2+(4*questionNumber)]);
    //   $("#answerD").text(Answers[3+(4*questionNumber)]);
      
       secondCount=timeToAnswer+1;
     }
   //  else
   //  {
       
      // gameComplete = true;
      
   //  }

       //setTimeout(displayTimeLeft,10);
       answerChosen = false;
       //console.log("dq set answerChosen to false set secondCount "+secondCount);

  } // end displayQuestion
// *********************************************************      
    function timeUp() {

      $("#time-left").text("times up");
      selectedAnswer = 'N';

      $("#message").text("Oh no... correct Answer is "+triviaObject[questionNumber].correctAnswer);
      if ( questionNumber < maxQuestions )
        {
          //if ( debug )
            console.log("*** timeUp count "+secondCount+" q ",questionNumber," max " + maxQuestions);
              //test setTimeout(displayQuestion,1000*7);
              //if (t1)
              //  clearTimeout(t1);
          t1 = setTimeout(displayTimeLeft,1000);
          
          unansweredCount++;
              //if ( debug )
          console.log("tu q increase unansweredCount new "+unansweredCount);
              //console.log("tu before inc questionNumber "+questionNumber);
          questionNumber++;
          if ( questionNumber >= maxQuestions)
            {
              gameComplete=true;
              if ( debug )
                 console.log("tu set gameComplete before dc");
              $("#questionSection").text("**** TRIVIA QUESTIONS ****");
              setTimeout(restartGame,timeBetweenGames);
              displayFinalCounts();   
            }
          if ( debug )
            console.log("tu q inc questionNumber new "+questionNumber);
          displayCounts();
        }
        else
        {
          gameComplete = true;
          if ( debug )
              console.log("tu set gameComplete do not increase wrongCount or questionNumber");
          //displayCounts();
          $("#questionSection").text("**** TRIVIA QUESTIONS ****");
          setTimeout(restartGame,timeBetweenGames);
          displayFinalCounts();
        }
        if ( debug )
          console.log("tu secondcount "+secondCount+" question "+questionNumber);
        secondCount=timeToAnswer+1;
              //console.log("tu reset count "+secondCount);
              //console.log("tu increase wrongCount "+wrongCount+ " questionNumber "+questionNumber);
        displayCounts();

  } // end timeUp
// *********************************************************
      function playGame() {

       $("#answerA").click(function() {
          if ( answerChosen == false ){
            selectedAnswer = "A";
        //    console.log("playGame " + "A selected " + selectedAnswer);
            afterAnswer();
          } // end answerChosen == false
       });

       $("#answerB").click(function() {
          if ( answerChosen == false ) {
            selectedAnswer = "B";
            afterAnswer();
          }
       });


       $("#answerC").click(function() {
          if ( answerChosen == false ) {
            selectedAnswer = "C";
          //  answerChosen = true;
            afterAnswer();
          }
       });


       $("#answerD").click(function() {
          if ( answerChosen == false ) {
            selectedAnswer = "D";
           // answerChosen = true;
            afterAnswer();
          }
       });

     //  displayCounts();
       //console.log("playGame bottom answer selected is " + selectedAnswer);

       return false;

      } // end playGame
// *********************************************************
 function restartGame() {
    displayCounts();
    console.log("restartGame");
 //   displayFinalCounts();
    $("#start").removeClass("hide");
   //test $("#start").attr("disabled","false");
  //  $("#start").removeClass("disabled");
   // $("#start").attr("class","show");
    $("#message").text("RESTARTGAME");
    $("#message2").text("RESTARTGAME");
    gameComplete = false;
    $("#resultsSection").attr("class","hide");
    displayFirstMessages();
    answerChosen = false;
    secondCount = 0;
    questionNumber = 0;
    wrongCount = 0;
    correctCount = 0;
    unansweredCount = 0;
    t1 = 0;
    t2 = 0;
    t3 = 0;
 }

});
