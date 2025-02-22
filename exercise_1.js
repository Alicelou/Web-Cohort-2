//resubmit commit and push request
// Web Cohort 1 Exercise 1

// For each expression, predict what you think the output will be in a comment (`//`) ***without first running the command***. Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.

// Example
typeof "potato";
// Prediction: Vegetable
// Actual: String

// What is the output of each of the expressions below?

typeof 15;

console.log(typeof 15);
// Prediction: number
// Actual: number

typeof 5.5;
console.log(typeof 5.5);
// Prediction: number
// Actual: number

typeof NaN;
console.log(typeof NaN);
// Prediction: null
// Actual: number

typeof "hello";
console.log(typeof "hello");
// Prediction: string
// Actual: string

typeof true;
console.log(typeof true);
// Prediction: boolean
// Actual: boolean

typeof (1 != 2);
console.log(typeof (1 != 2));
// Prediction: boolean
// Actual: boolean

"hamburger" + "s";
console.log("hamburger" + "s");
// Prediction: hamburgers
// Actual: hamburgers

"hamburgers" - "s";
console.log("hamburger" - "s");
// Prediction: hamburger
// Actual: NaN

"1" + "3";
console.log("1" + "3");
// Prediction: 13
// Actual: 13

"1" - "3";
console.log("1" - "3");
// Prediction: -2
// Actual:-2

"johnny" + 5;
console.log("johnny" + 5);
// Prediction: johnny5
// Actual:

"johnny" - 5;
console.log("johnny" - 5);
// Prediction: NaN
// Actual: NaN

99 * "luftbaloons";
console.log(99 * "luftbaloons");
// Prediction: NaN
// Actual: NaN


// Data Structures

// Arrays

// Javascript provides us with a number of native methods that allow us to interact with arrays. Find methods that do each of the following and provide an example...
// * Add an element to the back of an array.
// * Remove an element from the back of an array.
// * Add an element to the front of an array.
// * Remove an element from the front of an array.
// * Concatenates all the elements in an array into a string.
// * Separates the characters of a string into an array. This one is a string method.

// What will the contents of the below arrays be after the code samples are executed? Come up with an answer yourself before testing it out in the console.

var numbers = [2, 4, 6, 8];
numbers.pop();
numbers.push(10);
numbers.unshift(3);

// Your answer goes here.
// [3, 2, 4, 6, 10]
// What is the return value of the below code sample? Come up with an answer yourself before testing it out in the console.
console.log(numbers);
//[3, 2, 4, 6, 10]

var morse = ["dot", "pause", "dot"];
var moreMorse = morse.join(" dash ");

//moreMorse.split(" ");

moreMorse.split(" ");


// Your answer goes here.
//dot, pause, dot, dash
// What will the contents of the below array be after the below code sample is executed? Come up with an answer yourself before testing it out in the console.

console.log(moreMorse);
//dot dash pause dash dot



var bands = [];
var beatles = ["Paul", "John", "George", "Pete"];
var stones = ["Brian", "Mick", "Keith", "Ronnie", "Charlie"];
bands.push(beatles);
bands.unshift(stones);
bands[bands.length - 1].pop();
bands[0].shift();
bands[1][3] = "Ringo";


//bands = [["Mick", "Keith", "Ronnie", "Charlie"], ["Paul", "John", "George", "Ringo"]]

// Your answer goes here.
console.log(bands);
console.log(bands.map((innerArray) => innerArray.join(", ")));
//(2) [Array(4), Array(4)]
//(2) ['Mick, Keith, Ronnie, Charlie', 'Paul, John, George, Ringo']

// Booleans & Comparison Operators

// Write your expected result for the OR and AND operations below each statement. Fact check yourself with browser console.

// OR
true || true;

console.log(true || true);
// Prediction: true
// Actual: true

true || false;
console.log(true || false);
// Prediction: true
// Actual: true

false || true;
console.log(false || true);
// Prediction: true
// Actual: true

false || false;
console.log(false || false);
// Prediction: false
// Actual: false

3 || 3;
console.log(3 || 3);
// Prediction: 3
// Actual: 3

1 || 5;
console.log(1 || 5);
// Prediction: false
// Actual: 1

// AND
true && true;
console.log(true && true);
// Prediction: true
// Actual: true

true && false;
console.log(true && false);
// Prediction: false
// Actual: false

false && true;
console.log(false && true);
// Prediction: false
// Actual: false

false && false;
console.log(false && false);
// Prediction: false
// Actual: false

3 && 3;
console.log(3 && 3);
// Prediction: 3
// Actual: 3

1 && 5;
console.log(1 && 5);
// Prediction: ??
// Actual: 5

// Chained Logic

// Chain some logic together to create a function
// A 'dog' object looks like this dog = { weight, canSit, canShake }
// You are giving dogs treats. Large dogs over 50 pounds get bones, small dogs undere 50 pounds get biscuits.
// If a dog is large (over 50 pounds), print out "Have a bone!".
// If a dog is small (under 50 pounds), print out "Have a biscuit!"

function giveDogATreat(dog) {
  // You logic goes here

  if (dog.weight > 50) {
    console.log("Have a bone!");
  } else {
    console.log("Have a biscuit!");
  }

}

// Now a dog must sit or shake to get a treat
// Check the canSit or canShake variables
// If the dog can sit or shake, give them a treat as usual
// If the dog can't sit or shake, teach them to sit or shake by updating their attributes and then check again

function giveDogATreatAfterTrick(dog) {
  // Your logic goes here

  if (dog.canSit || dog.canShake) {
    console.log("Have some treat!");
  } else {
    dog.canSit = true;
    dog.canShake = true;
    giveDogATreatAfterTrick(dog);
  }
}

//check if the code works

// Dog1 weights over 50 lb, and it can't sit or shake
const dog1 = { weight: 60, canSit: false, canShake: false };
giveDogATreat(dog1);
giveDogATreatAfterTrick(dog1);

// Dog2 weights under 50 lb, and it can sit
const dog2 = { weight: 40, canSit: true, canShake: false };
giveDogATreat(dog2);
giveDogATreatAfterTrick(dog2);
