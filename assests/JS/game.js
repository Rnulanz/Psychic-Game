
 var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n' ,'o', 'p', 'q', 'r', 's', 't', 'u', 'v' ,'w', 'x', 'y' ,'z'];

 var wins= 0;
 var losses= 0;
 var left= 10;
 var yourletters=[];
 
 var directionsText = document.getElementById("directions-text");
 var whatImThinkingText = document.getElementById("whatImThinking-text");
 var winsText = document.getElementById("wins-text");
 var lossesText = document.getElementById("losses-text");
 var guessesLeftText = document.getElementById("guessesLeft-text");
 var guessesSoFarText = document.getElementById("guessesSoFar-text");
 
 document.onkeyup = function(event){
     var userGuess = event.key;
     var userGuess2 = userGuess.toLowerCase();
     var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    
     yourletters.push(userGuess2);
     
     if (userGuess2 === computerGuess){
         wins++;
     }
     else {
         if (left <= 0){
         losses++;
         yourletters= [];
         left = 10;


     }

         else {
             left--;
         }
     
         
     }
     directionsText.textContent = "";
     whatImThinkingText.textContent= "Guess what letter I am thinking!!!";
     winsText.textContent = "Wins: " + wins;
     lossesText.textContent = "Losses: " + losses;
     guessesLeftText.textContent = "Guesses Left: " + left;
     guessesSoFarText.textContent = "Letters: " + yourletters;
 
     }

     