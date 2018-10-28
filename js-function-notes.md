# JavaScript Functions and Control Flow
[Slide 2](https://thinkful.slides.com/thinkful/js-functions-conditionals#/) 

## Assessment
Once you finish the slides, go back and write a short-sentence summarizing below:
- [  ] Understand how JavaScript functions work
    * What I know: In JS, a **function** describes a repeatable process or behavior. You define that behavior once, and you can call it whenever you need to run your set of instructions. A function does something. 
- [  ] Understand how to use if and try statements for control flow
    * What I know: 
        * **if...else if... else** statements are conditional statements. They are used when you need different outcomes. 
        * **Try...catch..throw** statements are used to test errors
    *
- [  ]  Summary of today's drills in function, string, number and control flow:
    * Summary: 

## JavaScript functions
* Block of reusable code 
* Preferably doing one thing well 
    * "Single responsibility principle" => make sure that your code is readable
    
    
## Declaring a function
What is the difference between a function declaration and a function expression?
- [  ] function declaration
    * write something here
```
function sayHello(firstName, lastName){
  console.log('Hello', firstName, lastName);
}
```
- [  ] function expression
    * write something here
```
const sayHello = function sayHello(firstName, lastName){
  console.log('Hello', firstName, lastName);
}
```

## Calling a function 
* Just means that you are invoking a function that has already been defined and passing arguments in
* **parameters** are variables that are defined in a function declaration 
* **arguments** are values that are passed when you call a function

```
function sayHello(firstName, lastName){
  console.log('Hello', firstName, lastName);
};

//Calling sayHello function
sayHello('Trisha', 'Aguinaldo');
sayHello('Beyonce', 'Knowles');

```

<img align="right" width="300" src="Screen Shot 2018-10-27 at 7.49.03 PM.png" alt="undefined value" />

## Returning Values
* Almost always better to return a value 
* When you don't return a value, it returns as `undefined`

## Default parameters
* When a value is not provided, you can set default values instead of undefined
* Provide `default parameters` in your function declaration

```
function sayHello(firstName = 'Love', lastName = 'Nikki'){
console.log(`Hello my name is ${firstName} ${lastName}!`);
};

sayHello();
// will log => "Hello my name is Love Nikki!"

```
## Declaring with `let` and `const`
* `let` declare variables whose value may be reassigned
    * useful for loops
* `const` declare variables that can't be reassigned
* `var` deprecated, declares variables globally, still found in many codebases
    * avoid using `var` as it can get tricky when combining code

## Template literals
* instead of using string **concatenation**
```
let firstName = 'Love';
let lastName = 'Nikki';

console.log('My name is' + ' ' + firstName + ' ' + lastName);
// logs => "My name is Love Nikki""
```
* you can use **template literals** which is indicated by backward ticks ``
```
let firstName = 'Love';
let lastName = 'Nikki';

console.log(`My name is ${firstName} ${lastName}`);
// logs => "My name is Love Nikki""
```

## Control flow and conditionals
* Use if/else when the outcome of the statement depends on a condition being fulfilled
* **ternary operator** use only if the code is a simple if/else statement
```
function temperatureControl(temperature){
  if (temperature >= 78){
    return "Turn on";
  } else {
  return "Turn off";
  }
}

//can be written using ternary operator
// return temperature >= 78 ? "turn on" : "turn off";
```


## Switch
* As an alternative to if/else, usually used when the conditional is evaluating a string
```
function mainMenu(selection) {
  switch (selection) {
    case 'create':
      createFile();
      break;

    case 'deleteLast': {
      const record = fetchLastRecord();
      deleteFile(record.id);
      break;
    }

    default:
      process.exit(0);
    }
}
```
## Error handling
* tells the program how to handle errors
* **try block** the code block where something might go wrong, if no error occurs, the codeblock will execute
* **catch block** if there's an error in the try block (aka it fails), the catch block will execute and handles the error thrown by the try block
* **throw statement** if you want to throw a custom error message
* **finally block** the code here will always run, it can be used as a cleanup function
```
try {
  throw new Error('Message describing error');
} catch (e) {
    // Do something
} finally {
    // This will always run
}

```
### try/catch/throw demo
```
function addUserToDatabase(username) {
  if (!username || username.length < 3) {
    throw new Error('Must provide a username greater than 2 chars');
  }

  if (findUserInDatabase(username)) {
    throw new Error('Username already exists. Choose another.');
  }

  // All validations passed
  saveUserToDatabase(username);
    console.log('Successfully added person to database.');
  }

  try {
    addUserToDatabase('John');  // Successful
    addUserToDatabase('Jo');    // Will throw error and be caught below   
    addUserToDatabase();        // Will throw error and be caught below
  } catch(e) {
    console.error(e.message);
  }
```
