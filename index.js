 
var numofWin=0;
var numofLost=0;



for (var i =1 ; i <= 5; i++) {

var guessNumber=parseInt(prompt("enter any number from 1 to 5"));
var generatNumber=Math.floor(Math.random()*5+1);

 if (guessNumber==generatNumber) {
     //document.write("you are win and guess number is = "+guessNumber +"</br>"+" and also generat number is = "+generatNumber+"</br>"+"</br>");
     document.write("your guess is correct.....guessNumber=generatNumber & it is = "+generatNumber+"</br>");
     numofWin++;

 } else {
   // document.write("you are lost and guess number is = "+guessNumber +" and generat number is = "+generatNumber);
   document.write("your guess is not correct ...you type= "+guessNumber+" and generatNumber   = "+ generatNumber+"</br>");  
   numofLost++;
 }

}
document.write(" The result below of guessgame"+ "</br> ");
document.write("Numbers of correct guess = " +numofWin+"</br>");
document.write("Numbers of incorrect guess = " +numofLost+"</br>");
 
