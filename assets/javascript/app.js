      var Questions = [ 'what is favorite color?',
                        "what is favorite food?",
                        "what is favorite soda?" ];
      var Answers   = [ "A  blue", "B  green", "C  yellow", "D  purple",
                        "A fries","B chocolate","C ice cream","D donuts",
                        "A pepsi","B ginger ale","C coke","D 7up"];
      var selectedAnswer = "none";
      var correctAnswer = ['A','B','C','none'];
      var answerChosen = false;
      var secondCount = 0;
      var questionNumber = 0;
      var maxQuestions = 3;
      var wrongCount = 0;
      var correctCount = 0;
      var t1 = 0, t2 = 0, t3 = 0;
      var timeToAnswer = 10; //20;
      var timeBetweenQuestions = 3*1000;
      var gameComplete = false;

      hideAnswerButtons();
// *********************************************************
      function displayCounts() {
        console.log("correctCount "+ correctCount);
        console.log("wrongCount "+ wrongCount);
        console.log("number of questions "+ maxQuestions);
        console.log("questionNumber "+questionNumber); 
        console.log("gameComplete "+gameComplete);
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
        //console.log("sab answerChosen set to false");
        setTimeout(countSeconds,1000);
        //console.log("showAnswerButtons");      
      } // end showAnswerButtons
// *********************************************************
      //var userName = prompt("What's your name?");
      //$("#name").text("Hi " + userName);
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
      displayFirstMessages();
      gameComplete = false;
      $("#start").click( function() { 

        $("#time-left").text(secondCount +" seconds left");
        letsPlay=true; 
        //console.log("START letsPlay " + letsPlay);
        if  ( letsPlay ) {
          $("#message2").text("SELECT YOUR ANSWER BELOW");
          secondCount=timeToAnswer; //test
          displayTimeLeft();
          letsPlay = playGame();
          //console.log("playGame returns letsPlay "+letsPlay);
        }

        $("#start").attr("disabled","true");
        $("#start").attr("class","disabled");

      });
// *********************************************************
      //console.log("letsPlay before " + letsPlay);

      function displayTimeLeft() {
      
        //console.log( "displayTimeLeft letsPlay " + letsPlay);
        console.log( "**** dtl question "+(questionNumber+1)+" secondcount "+secondCount);

        // display question
        if ( !questionNumber )
        {
           //t3 = setTimeout(displayQuestion,10);
           t3 = setTimeout(displayQuestion,900);//test
           t2 = setTimeout(countSeconds,1000);
           //t3 = setTimeout(displayQuestion,1000);
           console.log("dtl countSeconds 1cs dq0 questionNumber "+questionNumber);
        }
        else
        {
           console.log("dtl questionNumber "+questionNumber+" t2 t3 clearTimeout");
           clearTimeout(t2);
           clearTimeout(t3);
           if ( questionNumber < maxQuestions )
           {
             t3 = setTimeout(displayQuestion,900);//test
             t2 = setTimeout(countSeconds,1000);
           }
           //else
           //{
            //gameComplete = true;
            //console.log("dtl set gameComplete q is "+questionNumber);
           //}

           //t3 = setTimeout(displayQuestion,1000);
           //setTimeout(countSeconds,1000*7);
           //console.log("dtl countSeconds cs1 dq1");          
        }
//        setTimeout(timeUp,1000*20);
        //setTimeout(countSeconds,1000);
      //  setTimeout(tenSeconds,1000*10);
      //  setTimeout(fiveSeconds,1000*5); //dont need () inside setTimeout

      }
// *********************************************************
      function countSeconds() {
        // if time left
         // console.log("1countSeconds count is " + count); 
       if ( gameComplete )
       {
        console.log("cs gc return");
        return;
       }
       if ( questionNumber < maxQuestions ) {       
        if ( secondCount ) {
          secondCount--;
          $("#time-left").text(secondCount + " seconds left");
          if ( secondCount < 4) 
           console.log("2 countSeconds count is " + secondCount+ " answer "+answerChosen+" question "+questionNumber);
          if ( !answerChosen )
          {
            //console.log("cs if no answer call cs again");
            t2 = setTimeout(countSeconds,1000);
          }
          else
          {
            console.log("cs clearTimeout t3 dc count "+secondCount + " question "+questionNumber+" answer "+answerChosen);
            clearTimeout(t3);
            //gameComplete = true;
            displayCounts();
          }
        } // end secondCount

        else
        {
         if ( !answerChosen ) {
            //test
            //answerChosen=true;
            console.log("cs NA before timeUp secondcount "+secondCount);
            timeUp();
            console.log("cs NA times up secondcount " + secondCount);
          }
          //test
          //if ( questionNumber < maxQuestions)
          //  questionNumber++;
          //else
          //{
            //displayTimeLeft();
            //$("#time-left").text(count);
            //console.log("cs count "+count+" update time-left answerChosen "+answerChosen);
          //}
        }

    } // end questionNumber < maxQuestions
  } // end countSeconds
// *********************************************************
     // function updateCounts() {

   /*       if ( selectedAnswer === correctAnswer[questionNumber] )
            correctCount++;
          else
            wrongCount++;
*/
       //   if ( questionNumber === maxQuestions )
      //      displayCounts();
   //   }
// *********************************************************
      function AfterAnswer() {
        answerChosen = true;
        console.log("AA question "+ questionNumber+" set answerChosen to true");
        
                $("#message").text("You selected "+selectedAnswer);
                $("#answer"+selectedAnswer).attr("selected",true);
                $("#answer"+selectedAnswer).attr("class","selected");
             //  if ( questionNumber < (maxQuestions-1) )
             //  {
            if ( selectedAnswer === correctAnswer[questionNumber] )
              {
                $("#time-left").text("YOU ARE CORRECT!");
                $("#message").text("You chose "+selectedAnswer);
                //test if ( questionNumber < (maxQuestions-1) )
                if ( questionNumber < (maxQuestions) )
                {
                   correctCount++;
                   console.log("aa increase correctCount new"+correctCount);
                 }
                //displayCounts();
              }
            else
            {
              $("#time-left").text("Oh no... Correct Answer was "+correctAnswer[questionNumber]);
              console.log("aa Oh no... Correct Answer was "+correctAnswer[questionNumber]);
                if ( (wrongCount + correctCount) < maxQuestions )
                {
                   wrongCount++;
                   console.log("aa increase wrongCount new "+wrongCount);
                } 
                else
                  console.log("aa do not increase wrongCount???");          
            }

          if ( (wrongCount + correctCount) >= maxQuestions)
          {
            console.log("AA set gameComplete");
            gameComplete = true;
          }

          displayCounts();            
    

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
              console.log("aa increased questionNumber new "+questionNumber);
            //  console.log("A dtl 5 questionNumber ",questionNumber," maxQuestions " + maxQuestions);
              //setTimeout(displayQuestion,1000*7);
              // wait before displaying next question
              console.log("aa call dtl ");
              t1 = setTimeout(displayTimeLeft,timeBetweenQuestions);
            }
            //test
            /*else
            {
              displayCounts();
            }*/
            console.log("aa end before dc ");
            displayCounts();
      }
// *********************************************************
      function displayQuestion() {

      if ( questionNumber < maxQuestions ) {
       console.log("displayQuestion " + questionNumber);
       $("#message").text("*** Question "+(questionNumber+1)+" ***");
       $("message2").text("*** SELECT ANSWER BELOW ***")
       $("#questionSection").text(Questions[questionNumber]);
       showAnswerButtons();

       $("#answerA").text(Answers[0+(4*questionNumber)]);
       $("#answerB").text(Answers[1+(4*questionNumber)]);
       $("#answerC").text(Answers[2+(4*questionNumber)]);
       $("#answerD").text(Answers[3+(4*questionNumber)]);
       secondCount=timeToAnswer;
     }
   //  else
   //  {
       
      // gameComplete = true;
      
   //  }

       //setTimeout(displayTimeLeft,10);
       answerChosen = false;
       console.log("dq set answerChosen to false set secondCount "+secondCount);

      } // end displayQuestion
// *********************************************************      
    function timeUp() {
        $("#time-left").text("times up");
       // letsPlay = false;
        selectedAnswer = 'N';
       // wrongCount++;
     //test   answerChosen = true;
            //$("#message").text("You selected C");
            //$("#answerC").attr("selected",true);
            //$("#answerC").attr("class","selected");
            //console.log("timeUp " + "selected " + selectedAnswer);
            //$("#message").text("Oh no... correct Answer is "+correctAnswer[questionNumber]);
            //count = 0;
            //questionNumber++;
      $("#message").text("Oh no... correct Answer is "+correctAnswer[questionNumber]);
            if ( questionNumber < (maxQuestions) )
            {
              console.log("*** timeUp question ",questionNumber," maxQuestions " + maxQuestions);
              //test setTimeout(displayQuestion,1000*7);
              setTimeout(displayTimeLeft,1000);
              //test
              wrongCount++;
              console.log("tu q increase wrongCount new "+wrongCount);
              //displayCounts();
              //wrongCount++;
              //test
              //test
              //console.log("tu before inc questionNumber "+questionNumber);
              //testif ( questionNumber < (maxQuestions-1))
              //{
                questionNumber++;
                if ( questionNumber >= maxQuestions)
                {
                 gameComplete=true;
                 console.log("tu set gameComplete before dc");    
                }
                console.log("tu q inc questionNumber new "+questionNumber);
               
              //}
              displayCounts();
            }
            else
            {
              gameComplete = true;
              console.log("tu set gameComplete do not increase wrongCount or questionNumber");
              displayCounts();
            }
         //test   else
         //   {
              //test
              //wrongCount++;
              //test
              console.log("tu secondcount "+secondCount+" question "+questionNumber);
              secondCount=timeToAnswer;
              console.log("tu reset count "+secondCount);
              //console.log("tu increase wrongCount "+wrongCount+ " questionNumber "+questionNumber);
          displayCounts();
         //   }
                
        //console.log("timeUp letsPlay "+letsPlay);

      } // end timeUp
// *********************************************************
      function playGame() {

       $("#answerA").click(function() {
          if ( answerChosen == false ){
            selectedAnswer = "A";
        //    console.log("playGame " + "A selected " + selectedAnswer);
          //  answerChosen = true;
            AfterAnswer();
          } // end answerChosen == false
       });

       $("#answerB").click(function() {
          if ( answerChosen == false ) {
            selectedAnswer = "B";
            //answerChosen = true;
            AfterAnswer();
          }
       });


       $("#answerC").click(function() {
          if ( answerChosen == false ) {
            selectedAnswer = "C";
          //  answerChosen = true;
            AfterAnswer();
          }
       });


       $("#answerD").click(function() {
          if ( answerChosen == false ) {
            selectedAnswer = "D";
           // answerChosen = true;
            AfterAnswer();
          }
       });

     //  displayCounts();
       //console.log("playGame bottom answer selected is " + selectedAnswer);

       return false;

      } // end playGame
// *********************************************************

