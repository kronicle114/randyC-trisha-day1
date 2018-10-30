/* 
***********************
Day 1: String, number, and logic drills
https://github.com/rich-at-thinkful/ft-curric-gists/blob/master/fundamentals/function-drills-2.md
***********************
*/

'use strict';

/* 
*********************** 
  JEDI NAME
***********************
*/

function jediName(firstName, lastName){
  return lastName.slice(0,3).concat(firstName.slice(0,2));
}
  
jediName('Beyonce', 'Knowles');
// returns => 'KnoBe';

/* 
*********************** 
  TO INFINITY...
***********************
*/

// MENTOR NOTES: You can only have one "if" & "else" statements, but infinite number of "else if"

function beyond(num){
  if (num === Infinity){
    console.log('And beyond');
  } else if (Number.isFinite(num) === true && num > 0){
    console.log('To infinity');
  } else if (Number.isFinite(num) === true && num < 0){
    console.log('To negative infinity');
  } else if (num === 0) {
    console.log('Staying home');
  }
}

/* Infinite number */ 
let x = 1000/0;
beyond(x);

/* Finite & positive number */ 
//beyond(Math.PI);

//let y = 2.865343;
//beyond(y);

//or any positive integer (3, 4, 5)
// beyond(3);

/* Finite & negative number */  
// let z = -2.865343;
// beyond(z);

// beyond(-3);

/* Zero */
//beyond(0);


/* 
*********************** 
  CRACKING THE CODE
***********************
*/

function decode(str){
  let wordArray = str.split(' ');
  let decodedArray = [];
  for (let i = 0; i < wordArray.length; i++){
    if (wordArray[i][0] === 'a'){
      decodedArray.push(wordArray[i].charAt(1));
    } else if (wordArray[i][0] === 'b'){
      decodedArray.push(wordArray[i].charAt(2));
    } else if (wordArray[i][0] === 'c'){
      decodedArray.push(wordArray[i].charAt(3));
    } else if (wordArray[i][0] === 'd'){
      decodedArray.push(wordArray[i].charAt(4));
    }  else {
      decodedArray.push(' ');
    }
  }
  // MENTOR NOTES: the ".replace()" is not necessary, you can just pass a function inside ".join()"
  return decodedArray.join().replace(/,/g, '');
}

decode('craft block argon meter bells brown croon droop');
// returns => "for loop"


/* 
************************* 
  HOW MANY DAYS IN A MONTH
*************************
*/

function daysInYear(month, leapYear) {
  let numOfDays;

  switch(month){
  case 'January':
  case 'March':
  case 'May':
  case 'July':
  case 'August':
  case 'October':
  case 'December':
    numOfDays = 31;
    break;
  
  case 'April':
  case 'June':
  case 'September':
  case 'November':
    numOfDays = 30;
    break;            
  
  case 'February':
    numOfDays = leapYear ? 29 : 28; // if leapYear is true, numOfDays = 29, else numOfDays = 28
    break;
  }
  return `${month} has ${numOfDays} days`;
}

//daysInYear('February', true);
// => February has 29 days
// daysInYear('March', false);
// => February has 28 days



/* 
*********************** 
  ROCK PAPER SCISSORS
***********************
*/

function rockPaperScissors(userChoice){
  
  //throw error if num is invalid choise
  function numToWord(num){
    switch(num){
    case 1:
      return 'rock';
      break;
    case 2:
      return 'paper';
      break;
    case 3:
      return 'scissors';
      break;
    default:
      throw new Error('Please pick a number between 1 - 3.')
    }
  }

  //computerChoice = randomly generated number b/w 1-3
  const computerChoice = Math.floor(Math.random() * 3) + 1;

  //container variables for user and computer choice
  //pass userChoice & computerChoice to numToWord() so it returns a string or an error
  let userWord = numToWord(userChoice);
  let computerWord = numToWord(computerChoice);

  //conditional statements for 3 cases between player and computer
  if (userChoice === computerChoice){
    return `It's a tie! Both players choose ${userWord}`;
  } else if ((userChoice === 1 && computerChoice === 2) || (userChoice === 2 && computerChoice === 3) || (userChoice === 3 && computerChoice === 1)) {
    return `Human wins! The User chose ${userWord} and AI chose ${computerWord}!`
  } else {
    return `Computer wins! AI chose ${computerWord} and the User chose ${userWord}.`
  }
}

rockPaperScissors(2);
