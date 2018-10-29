'use strict';

function getYearOfBirth (age){
    console.log('year of birth');
  // try{
  if(typeof age === 'string' || isNaN(age) === true  || age === undefined){
    console.log('hello world');
    throw new Error('Age cannot be text. Please enter a number.');
  }
  if (age < 0){
    throw new Error('Age can not be negative');
  }
  //  getYearOfBirth(25); recursion  a function that calls  itself
  // const greeting1 = createGreeting('Trisha', 25);
  // console.log(greeting1);
  return 2018 - age;
//   } catch(e) {
//     console.log(e.message);
//   }
}
 

//     const yearOfBirth = 2018 - age;
//     return yearOfBirth;
//     try {
//         getYearOfBirth(25);
//         const greeting1 = createGreeting('Trisha', 25);
//         console.log(greeting1);
//     } catch(e) {
//         console.error(e.message);
//     }
// };


function createGreeting (name,age){
  try {
    const yearOfBirth = getYearOfBirth(age);
    return `Hi, my name is ${name} and I'm 25 years old. I was born in ${yearOfBirth}.`;
  } catch(e) {
    console.error(e.message);
  }
}

const greeting1 = createGreeting('Trisha', 20);
console.log(greeting1);


