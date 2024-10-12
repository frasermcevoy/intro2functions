// Part 1 - Declare greeting

function greet(name = 'Friend') {
    return `Hello ${name}`;
}

console.log(greet()); 
console.log(greet('Paul'))

// Part 2 - Parameters and Returning Values

function addNumbers(num1, num2) {
    return num1 + num2;
}
let result = addNumbers(99, 1);
console.log(result); 

// Part 3 - Function scope (global=outtie local=innie)

let x = 55;

console.log(x)  //global

function changeValue() { // local
    let x = 2;
    console.log(x);
}

changeValue(); 
console.log(x) // global again

// Part 4 - Closures

function outerFunction() {
  let count = 5;

  function innerFunction() {
    count++;
    console.log("Mississippi", count);
  }

  return innerFunction;
}

const counter = outerFunction();

counter(); 
counter(); 
counter(); 
counter(); 

//

function countoff() {
    let count = 0;
    
    const countoff = function() {
      ++count;
      return `and a ${count}`; 
    }
    
    countoff.reset = () => count = 0;
    
    return countoff;
   };
   
   const counter2 = countoff();
   console.log(counter2());
   console.log(counter2());
   counter2.reset();
   console.log(counter2(),2,3,4);