// This statement prints out a message in a modal window:
// alert("Hello World");

/* this is a
multi-line
comment
*/

// this prints to the console
console.log("Hello from the console");

//adds to end of the body element
document.body.innerHTML += "<p>Hello from JS!</p>";

// variables are like boxes for data
// a stringe variable stores a series of characters
// one possible use of a variable is to define data that is used multiple times.
const message = "Welcome to the site!";
// alert(message);
console.log(message);

// another use of a variable is to capture some data from the user
// const name = prompt("what is your name?");
// document.body.innerHTML += "<h1>Welcome, " + name + "</h1>";
// document.body.innerHTML += `<h1>Welcome, ${name}!</h1>`;

// variable naming:
// camelCase: characaterName, myTopScore - use variables, funcations, instances
// PascaleCase: uppercase first letter of each word - constructors/classes
// a number variable stores an integer or floating point number (decimal)
const plantCost = 2.5;
const potCost = 12.25;
const soilCost = 13.0;
const subtotal = potCost + plantCost + soilCost;
console.log(`The subtotal for your purchase is ${subtotal}.`);

// const item1 = prompt("What is the cost of item 1?");
// const item2 = prompt("What is the cost of item 2?");
// const item3 = prompt("What is the cost of item 3?");
// const itemSubtotal = Number.parseFloat(item1) + Number.parseFloat(item2) + Number.parseFloat(item3);
// console.log(`The subtotal for your items is ${itemSubtotal}.`);

// declaring a variable: const (constant), let, var
// const = identifier is not allowed to be re-assigned
// let = identifiers that area llowed to re-assigned

// another use of a variable is to track some data that changes over time
let numLives = 5;
//numLives = numLives + 1;
//numLives += 1;
numLives++;
console.log(`You have ${numLives}x lives left.`);
//numLives = numLives - 3;
numLives -= 3;
console.log(
  `You fell down a couple of holes. You now have ${numLives}x lives left.`
);

// object - package up related data and functionality together
const player = {
  numLives: 5,
  name: "Sarah",
  stats: {
    attack: 5,
    defense: 3,
    agility: 2,
  },
};
// dot syntax for accessing properties in an object:
console.log(`The player ${player.name} has ${player.numLives} lives.`);
// bracket notiional for acessing properties:
console.log(`The player ${player["name"]} has ${player["numLives"]} lives.`);
console.log(`The player has a defense score of ${player.stats.defense}.`);

// this is a DOM element (document object model)
const jsOutputDiv = document.querySelector("#js-output");
console.log(jsOutputDiv);
jsOutputDiv.innerHTML += "<p>Howdy! I'm injected from the JS.</p>";
jsOutputDiv.innerHTML += "<p>I am inside of the main element.</p>";

// a function is a re-usable block of code.
function sayHello() {
  console.log("Say hello from our function!");
}
sayHello();

const sayGoodbye = () => {
  console.log("Goodbye from the Function!");
  console.log("See you next time!");
};
sayGoodbye();
