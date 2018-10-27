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

function beyond(num){
  if (num === Infinity){
    console.log('And beyond');
  } if (Number.isFinite(num) === true && num > 0){
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
  return decodedArray.join().replace(/,/g, '');
}

decode('craft block argon meter bells brown croon droop');
// returns => "for loop"

// function decode(str){
//   let wordToLetter = str.split(' ');
//   let decodedArray = [];
//   for (let i = 0; i < wordToLetter.length; i++){
//     if (wordToLetter[i][0] === 'a'){
//       decodedArray.push(wordToLetter[i].charAt(1));
//     } else if (wordToLetter[i][0] === 'b'){
//       decodedArray.push(wordToLetter[i].charAt(2));
//     } else if (wordToLetter[i][0] === 'c'){
//       decodedArray.push(wordToLetter[i].charAt(3));
//     } else if (wordToLetter[i][0] === 'd'){
//       decodedArray.push(wordToLetter[i].charAt(4));
//     }  else {
//       decodedArray.push(' ');
//     }
//   }
//   return decodedArray;
// }

// decode('craft block argon meter bells brown croon droop');
// (8) ["f", "o", "r", " ", "l", "o", "o", "p"]



// function decode(str){
//   let wordToLetter = str.split(' ');
//   let decodedArray = [];
//   for (let i = 0; i < wordToLetter.length; i++){
//     if (wordToLetter[i] === 'a'){
//       decodedArray.push(wordToLetter[i].charAt(1));
//     } else if (wordToLetter[i] === 'b'){
//       decodedArray.push(wordToLetter[i].charAt(2));
//     } else if (wordToLetter[i] === 'c'){
//       decodedArray.push(wordToLetter[i].charAt(3));
//     } else if (wordToLetter[i] === 'd'){
//       decodedArray.push(wordToLetter[i].charAt(4));
//     }  else {
//       decodedArray.push(' ');
//     }
//   }
//   return decodedArray;
// }

// decode('craft block argon meter bells brown croon droop');



// function decode(str){
//   if (str[0] === 'c'){
// 	console.log(str.charAt(3));
//   }
// };

// decode('craft');
// f
// //expected => 'for loop'

// function decode(str){
//   //  let wordToLetter = str.split(' ');
//    let decodedWord = '';
//    for (let i = 0; i < str.length; i++){
//     if (i === 'c'){
//     return str.charAt(3);
//      } // else if (){
//   //   } else if (){
//   //   } else if (){
//   //   } else {
//   //  }
//    }
//   };
  
//   decode('craft');
//   //expected => 'for loop'


/* 
************************* 
  HOW MANY DAYS IN A MONTH
*************************
*/

function (month, leapYear){
  
}






/* 
*********************** 
  ROCK PAPER SCISSORS
***********************
*/