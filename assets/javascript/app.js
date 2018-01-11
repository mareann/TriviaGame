// "document.ready" makes sure that our JavaScript doesn't get run until the HTML document is finished loading.
$(document).ready(function() {

  var triviaObject = [
   {
      Question:"A puggle is a cross between which two dog breeds?",
      Answers:["Pug and Poodle", "Pug and Beagle", "Pug and Terrier", "Pug and Muggle"],
      correctAnswer:'B'
   },
   {
      Question:"What is the most popular breed of dog in the United States?",
      Answers:["Beagle","Labrador Retriever","German Shepard","Poodle"],
      correctAnswer:'B'
   },
   {
      Question:"How many teeth do adult dogs have?",
      Answers: ["24 teeth","32 teeth","42 teeth","28 teeth"],
      correctAnswer:'C'
   },
   {
      Question:"Through which part of the body do dogs sweat?",
      Answers: ["nose","mouth","paws","armpits"],
      correctAnswer:'C'
   },
   {
      Question:"Which dog breed has a black tongue?",
      Answers: ["Husky","Labrador","Weimaraner","Chow Chow"],
      correctAnswer:'D'
   },
   {
      Question:"What breed of dog is the smallest used in hunting?",
      Answers: ["Chihuahua","Minature Dachsund","Toy Poodle","Smooth Fox Terrier"],
      correctAnswer:'B'
   },
   {
      Question:"What is a Blue Heeler also known as?",
      Answers: ["Australian Shepard","English Bulldog","Australian Cattle Dog","German Shepard"],
      correctAnswer:'C'
   },
   {
      Question:"What from a dog can be used to uniquely identify it in the same way finger prints can be used to identify humans?",
      Answers: ["its smell","its paw print","its tongue print","its nose print"],
      correctAnswer:'D'
   },
   {
      Question:"George Lucas pet Alaskan Malamute inspired the creation of which character?",
      Answers: ["Ewoks","Porgs","Chewbacca","Yoda"],
      correctAnswer:'C'
   },
   {
      Question:"If you are looking for a mellow, mild-mannered dog, a good choice would be:",
      Answers: ["Jack Russell Terrier","Cavalier King Charles Spaniel","Schnauzer","Welsh Corgi"],
      correctAnswer:'B'
   }
]

  if ( debug )
  {
     console.log("triviaObject q "+triviaObject[0].Question);
     console.log("triviaObject ans "+triviaObject[0].Answers);
     console.log("triviaObject q "+triviaObject[0].correctAnswer);
  }

  var answerChosen = false;
  var secondCount = 0;
  var questionNumber = 0;
  var maxQuestions = 10;
  var wrongCount = 0;
  var correctCount = 0;
  var unansweredCount = 0;
  var t1 = 0, t2 = 0, t3 = 0;
  var timeToAnswer = 10; //20;
  var timeBetweenQuestions = 3*1000;
  var timeBetweenGames = 25*1000;
  var gameComplete = false;
  var debug = false;
  var test =0;

// **********************************************************
// debug displayCount in console
// **********************************************************
function displayCounts() 
 {
    console.log("correctCount "+ correctCount);
    console.log("wrongCount "+ wrongCount);
    console.log("unansweredCount "+unansweredCount);
    console.log("number of questions "+ maxQuestions);
    console.log("questionNumber "+questionNumber); 
    console.log("gameComplete "+gameComplete);
 } // end displayCounts
// **********************************************************
// displayFinalCounts
// display results on screen
// **********************************************************
function displayFinalCounts() 
 {
    hideAnswerButtons();
    $("#time-left").text("Thank you");
    $("#message").text("for playing!");
    $("#message2").text("Here are your results. Game restarts shortly...");
    $("#resultsSection").removeClass("hide");
    $("#resultsBox").removeClass("hide");
    $("#resultsHeader").text(maxQuestions+" Trivia Questions");
    $("#finalCorrectCount").text("Correct Answers: "+correctCount);        
    $("#finalWrongCount").text("Wrong Answers: "+wrongCount);
    $("#finalUnansweredCount").text("Unanswered: "+unansweredCount);
    //console.log("testing");
 } // end displayFinalCounts
// **********************************************************
// hideAnswerButtons
// **********************************************************
function hideAnswerButtons() 
 {
    $("#answerSection").attr("class","hide");
 } // end hideAnswerButtons
// **********************************************************
// dispLayAnswerButtons
// use show class to display answer buttons
// **********************************************************
function dispLayAnswerButtons() 
 {
    $("#answerSection").attr("class","show"); 
    $("#answerA").removeClass("selected");
    $("#answerB").removeClass("selected");
    $("#answerC").removeClass("selected");
    $("#answerD").removeClass("selected");
    answerChosen = false;      
 } // end dispLayAnswerButtons
// *********************************************************
// displayFirstMessages
// display beginning game information
// *********************************************************      
function displayFirstMessages() 
 {
    $("#time-left").text(timeToAnswer+" seconds per question");
    $("#message").text("PRESS START TO BEGIN TRIVIA GAME");
    $("#message2").text("Good Luck!!!");
    $("#questionSection").text("**** TRIVIA QUESTIONS ****");
 } // end displayFirstMessages

// *********************************************************
//                     M A I N
// *********************************************************
// hide answer buttons and results section
// display first messages
// wait for user to press start button
// after start button press
// call displayTimeLeft to start timers
// hide start button
// *********************************************************
  hideAnswerButtons();
  $("#resultsSection").attr("class","hide");
  $("#resultsBox").attr("class","hide");
  displayFirstMessages();
  gameComplete = false;
  // START Button
  $("#start").click( function() { 
    $("#message").text("START");
    $("#message2").text("SELECT YOUR ANSWER BELOW");
    displayTimeLeft(); 
    playGame();
    $("#start").attr("class","hide");
  }); // end start click function
// *********************************************************
// displayTimeLeft
// set timer to display next Question 
// set timer to count seconds allowed to answer question
// *********************************************************
function displayTimeLeft() 
 {

  if ( gameComplete )
    {
      if ( debug )
        console.log(" dtl gc return")
      return;
    }
  if ( debug )
    console.log( "**** dtl q "+(questionNumber+1)+" secondcount "+secondCount);
 
  if ( questionNumber < maxQuestions )
    {
      secondCount=timeToAnswer+1;
      t3 = setTimeout(displayQuestion,900);
      t2 = setTimeout(countSeconds,1000); //displayTimeLeft q < max
    }

 } // end displayTimeLeft

// **********************************************************
// countSecords
// update seconds left on the screen
// reset second timer if no answer chosen
// if secondCount is 0 -- call timeUp function
// **********************************************************
function countSeconds() 
 {

  if ( debug )
    {
      test++; // test timer
      console.log("test ",test);
    }
  if ( gameComplete )
    {
      if ( debug )
        console.log("cs gc return");
      return;
    }
  if ( questionNumber < maxQuestions ) 
    { 
      if ( secondCount ) 
      {
        secondCount--;
        if ( secondCount < 4 ) 
          {
            if ( debug )
              console.log("2 countSeconds count is " + secondCount+ " answer "+answerChosen+" question "+questionNumber);
          }
        if ( !answerChosen )
          {
            t2 = setTimeout(countSeconds,1000); //cs if no answerChosen
            $("#time-left").text("Time Remaining: "+ secondCount +" seconds");
          }
      } // end secondCount
      else
      {
        if ( !answerChosen ) 
          timeUp();
      }
    } // end questionNumber < maxQuestions

} // end countSeconds
// *********************************************************
// afterAnswer
// display correct answer or you are correct message
// update correctCount or wrongCount
// increase questionNumber
// *********************************************************
function afterAnswer() 
 {

  answerChosen = true;        
  $("#message").text("You selected "+selectedAnswer);
  $("#answer"+selectedAnswer).attr("selected",true);
  $("#answer"+selectedAnswer).attr("class","selected");

  if ( selectedAnswer === triviaObject[questionNumber].correctAnswer )
   {
      $("#time-left").text("Woo Hoo! You are Correct!!");
      $("#message").text("You chose "+selectedAnswer);
      if ( questionNumber < maxQuestions )
        {
          correctCount++;
          if ( debug )
            console.log("aa increase correctCount new"+correctCount);
         }
   }
  else
   {
      switch (triviaObject[questionNumber].correctAnswer) {
        case 'A':      
          $("#time-left").text("Oh no... Correct Answer was "+triviaObject[questionNumber].correctAnswer+
    " "+triviaObject[questionNumber].Answers[0]);
          break;
        case 'B':      
          $("#time-left").text("Oh no... Correct Answer was "+triviaObject[questionNumber].correctAnswer+
    " "+triviaObject[questionNumber].Answers[1]);
  break;
         case 'C':      
           $("#time-left").text("Oh no... Correct Answer was "+triviaObject[questionNumber].correctAnswer+
    " "+triviaObject[questionNumber].Answers[2]);
  break;
        case 'D':      
          $("#time-left").text("Oh no... Correct Answer was "+triviaObject[questionNumber].correctAnswer+
    " "+triviaObject[questionNumber].Answers[3]);
          break;
        default:     
          $("#time-left").text("Oh no... Incorrect Answer");
      }
      if ( debug )
        console.log("aa Oh no... Correct Answer was "+triviaObject[questionNumber].correctAnswer);
      if ( (wrongCount + correctCount + unansweredCount) < maxQuestions )
       {
          wrongCount++;
          if ( debug )
           console.log("aa increase wrongCount new "+wrongCount);
       }          
   }

  if ( (wrongCount + correctCount + unansweredCount) >= maxQuestions)
    {
      if ( debug )
        console.log("AA set gameComplete");
      gameComplete = true;
      $("#questionSection").text("**** TRIVIA QUESTIONS ****");
      setTimeout(restartGame,timeBetweenQuestions+timeBetweenGames);
      setTimeout(displayFinalCounts,timeBetweenQuestions);
    }

  if ( questionNumber < (maxQuestions-1) )
    {
      questionNumber++;
      if ( debug )
        console.log("aa increased questionNumber new " + questionNumber);
        t1 = setTimeout(displayTimeLeft,timeBetweenQuestions);
    }
  if ( debug )
    {
      console.log("aa end before dc ");
      displayCounts();
    }
 } // end afterAnswer

// *********************************************************
// displayQuestion
// display question and answer choices
// *********************************************************
function displayQuestion() 
 {

  if ( questionNumber < maxQuestions ) 
    {
      if ( debug )
        console.log("displayQuestion " + questionNumber+" count "+secondCount);
      $("#message").text("*** Question "+(questionNumber+1)+" ***");
      $("message2").text("*** SELECT ANSWER BELOW ***")
      $("#questionSection").text(triviaObject[questionNumber].Question);
      dispLayAnswerButtons();
      $("#answerA").text("A. "+triviaObject[questionNumber].Answers[0]);
      $("#answerB").text("B. "+triviaObject[questionNumber].Answers[1]);
      $("#answerC").text("C. "+triviaObject[questionNumber].Answers[2]);
      $("#answerD").text("D. "+triviaObject[questionNumber].Answers[3]);
      
      secondCount=timeToAnswer+1;
    }

  answerChosen = false;

} // end displayQuestion

// ********************************************************* 
// timeUp
// update unansweredCount
// increase questionNumber
// call displayTimeLeft
// reset secondCount
// if last question, start final count timer, restart game timer
// *********************************************************     
function timeUp() 
 {

  $("#time-left").text("**** Oh no... Times up ****");
  selectedAnswer = 'N';

  $("#message").text("Oh no... correct Answer is "+triviaObject[questionNumber].correctAnswer);
  if ( questionNumber < maxQuestions )
    {
      if ( debug )
        console.log("*** timeUp count "+secondCount+" q ",questionNumber," max " + maxQuestions);

      t1 = setTimeout(displayTimeLeft,1000);
          
      unansweredCount++;
      if ( debug )
        console.log("tu q increase unansweredCount new "+unansweredCount);
      questionNumber++;
      if ( questionNumber >= maxQuestions) 
        {
          gameComplete=true;
          if ( debug )
            console.log("tu set gameComplete before dc");
          $("#questionSection").text("**** TRIVIA QUESTIONS ****");
          setTimeout(restartGame,timeBetweenQuestions+timeBetweenGames);
          setTimeout(displayFinalCounts,timeBetweenQuestions);
        }
      if ( debug )
      {
        console.log("tu q inc questionNumber new "+questionNumber);
        displayCounts();
      }
    }
  else
    {
      gameComplete = true;
      if ( debug )
        console.log("tu set gameComplete do not increase wrongCount or questionNumber");
      $("#questionSection").text("**** TRIVIA QUESTIONS ****");
      setTimeout(restartGame,timeBetweenQuestions+timeBetweenGames);
      setTimeout(displayFinalCounts,timeBetweenQuestions);
    }
  if ( debug )
      console.log("tu secondcount "+secondCount+" question "+questionNumber);

  secondCount=timeToAnswer+1;

  if ( debug )
    displayCounts();

} // end timeUp
// *********************************************************
// playGame
// wait for user to answer question 
// save user answer in selectAnswer
// call afterAnswer
// *********************************************************
function playGame() 
 {

  $("#answerA").click(function() {
    if ( answerChosen == false )
    {
      selectedAnswer = "A";
      afterAnswer();
    } 
  });

  $("#answerB").click(function() {
    if ( answerChosen == false ) 
      {
        selectedAnswer = "B";
        afterAnswer();
      }
  });

  $("#answerC").click(function() {
    if ( answerChosen == false ) 
      {
        selectedAnswer = "C";
        afterAnswer();
      }
  });

  $("#answerD").click(function() {
    if ( answerChosen == false ) {
         selectedAnswer = "D";
         afterAnswer();
      }
  });

} // end playGame
// *********************************************************
// restartGame
// reset all game variables
// *********************************************************
function restartGame() 
 {
   if ( debug )
    {
      console.log("restartGame");
      displayCounts();
    }
   $("#start").removeClass("hide");
   $("#message").text("RESTARTGAME");
   $("#message2").text("RESTARTGAME");
   gameComplete = false;
   $("#resultsSection").attr("class","hide");
   $("#resultsBox").attr("class","hide");
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
 } // end restartGame

}); // end document.ready(function()
