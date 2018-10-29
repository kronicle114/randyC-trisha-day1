
function getYearOfBirth (age){
    const yearOfBirth = 2018 - age;
    return yearOfBirth;

};
 


function createGreeting (name,age){
    const yearOfBirth = 2018 - age;
    return `Hi, my name is ${name} and I'm 25 years old. I was born in ${yearOfBirth}.`;

};

const greeting1 = createGreeting('Trisha', 25);
console.log(greeting1);

