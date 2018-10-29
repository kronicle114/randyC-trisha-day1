
function getYearOfBirth (age){
    
    if(typeof age === string){

         throw new Error("Age cannot be text");

    }
    try{
        getYearOfBirth(25);
        const greeting1 = createGreeting('Trisha', 25);
        console.log(greeting1);
    } catch(e) {

        console.log(e.message);
    }


    }
    
    if (age < 0){
        throw new Error("Age can not be negative");
    }
    const yearOfBirth = 2018 - age;
    return yearOfBirth;
    try {
        getYearOfBirth(25);
        const greeting1 = createGreeting('Trisha', 25);
        console.log(greeting1);
    } catch(e) {
        console.error(e.message);
    }
};

getYearOfBirth(-2);

function createGreeting (name,age){
    const yearOfBirth = 2018 - age;
    return `Hi, my name is ${name} and I'm 25 years old. I was born in ${yearOfBirth}.`;

};

const greeting1 = createGreeting('Trisha', 25);
console.log(greeting1);

