
// // let testscore= 59;
// // let collegeStudent = true;
// // let grade;

// // if(testscore>=90){
// //     garde = "a";
// // }
// // else if (testscore >=80){
// //     grade = "b";}
// // else if (testscore >=70){
// //     grade = "c";}
// // else if (testscore >=60){
// //     grade = "d";}
// //     else{
// //         if(collegeStudent){
// //             grade="u";
// //         }
// //         else {garde = "f"}
// //     }

// // console.log(grade);



// // conditionals : switch statements

// //syntax
// switch("2"){

//     case 1:
//         //run this code
//         break;

//     case 2:
//         //run this different code
//         break;

//     default:
//         //run this code if no case matches
//         //no need for a break here
// }


// switch(Math.floor(Math.random()*3 +1))  {

//     case 1:
        
//         console.log(1)
//         break;

//         case 2:
           
//             console.log(2)
//             break;
//         case 3:
          
//             console.log(3)
//             break;
        
//     default:
        
//         console.log("no match")
// }

// let playerOne = "scissors";
// let computer = "rock";

// switch (playerOne) {
//     case "rock":
//         if (computer === "rock") {
//             console.log("Tie game");
//         } else if (computer === "paper") {
//             console.log("Computer wins");
//         } else {
//             console.log("Player One wins");
//         }
//         break;

//     case "paper":
//         if (computer === "paper") {
//             console.log("Tie game");
//         } else if (computer === "scissors") {
//             console.log("Computer wins");
//         } else {
//             console.log("Player One wins");
//         }
//         break;

//     case "scissors":
//         if (computer === "scissors") {
//             console.log("Tie game");
//         } else if (computer === "rock") {
//             console.log("Computer wins");
//         } else {
//             console.log("Player One wins");
//         }
//         break;

//     default:
//         console.log("Invalid choice");
// }

// // conditionals : ternary operators

// //syntax
// //condition ? ifTrue : ifFalse; // 

// let soup ;
// let response = soup ? "yes we have soup" : "sorry no soup today";
// console.log(response)

// let soup = "chicken noodle soup" ;
// let isCustomerBanned = false;
// let soupAccess = isCustomerBanned 
// ? "soory no soup for u"
// : soup
// ? `yes we have ${soup} today`
// : "sorry, no soup today";
// console.log(soupAccess);


// let testScore = 80;
// let myGrade = 
// testScore > 89 ? "a"
// : testScore > 79 
// ? "b"
// : testScore > 69 
// ? "c"
// : testScore > 69 
// ? "d"
// : "f";
// console.log(`my test grade is a ${myGrade}`)

// let palyerOne = "rock" ;
// let computer = "paper"; 
// let result = palyerOne === computer ? "tie " 
// : palyerOne === "rock" && computer === "paper" ? "computer wins"
// : palyerOne === "paper" && computer === "scissors" ? "computer wins"
// : palyerOne === "scissors" && computer === "rock" ? "computer win"
// : "player one wins";
// console.log(result)
  






// // user input 
// alert("helloworld") // just show a popup
// confirm("ok === true\nCancel === false"); // gives two buttons on popup to ok or cancel
// prompt("please enter your name"); // used to take input value from user using popup


// let name = prompt("please enter your name");
// console.log(name);


// let myBoolean = confirm("ok === true\nCancel === false");
// console.log(myBoolean)

// functions
//reusable block of code
// methods = built-in functions
// "Dave".toLowerCase();
// Math.random();

//function decleration syntax;

// function sum(num1, num2) {
//     console.log(num1)
//     console.log(num2)
//     return num1 + num2;
// }
// console.log(sum(2,6));

// function sum(num1, num2) {
//     if(num2 === undefined){
//         return num1 + num1;
//     }
//     return num1 + num2;
// }
// console.log(sum(5,10));

// function getUserNameFromEmail(email) {
//     return email.slice(0, email.indexOf("@"));
// }
// console.log(getUserNameFromEmail("user@github.com"))

// anonymus fxn -  dont proivde a name for fxn
// const getUserNameFromEmail = function(email) {
//     return email.slice(0, email.indexOf("@"));
// }
// console.log(getUserNameFromEmail("user@github.com"))

// => arrow function
// const getUserNameFromEmail = (email) => {
//     return email.slice(0, email.indexOf("@"));
// }
// console.log(getUserNameFromEmail("user@github.com"))

// const toProperCase = (name) => {
//     return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    
// };
// console.log(toProperCase("hello world"));

// var, let, and const

// global scope
// var x = 1;
// let y = 2;
// const z = 3;

// //local scope - block scope // - y = 4 is not available in global scope(ie outside this block)
// {
//     let y = 4;

// }
// // local scope - fxn scope // - only works inside the fxn { //here}
// function myFunc() {
//     const z = 5;
// }

// var x = 1; // fxn scoped
// let y = 2; // block scoped
// const z = 3;

// console.log(`global: ${x}`);
// console.log(`global: ${y}`);
// console.log(`global: ${z}`);

// function myFunc() {
//     var x = 10; // fxn scoped
//     const z = 5; // block scoped


//     {
//         var x = 11;
//         const z = 6;
//         console.log(`block: ${x}`);
//         console.log(`block: ${y}`);
//         console.log(`block: ${z}`);
//     }
//     console.log(`function: ${x}`);
//     console.log(`function: ${y}`);
//     console.log(`function: ${z}`);

// }
// myFunc();

/**understanding scope
 * global = nit in fxn or block. not desirable
 * local = in a fxn or block. not global
 * var instantiates fxn() scoped variables
 * let and const instantiate {block} scoped variables.
 * 
 * helpful tips
 * avoid using var.stick with const and let.
 * use const unless you need to reassign value
 * use let if you know you will reassign value
 */

// Array
// const myArray = []; // cannot rassign myArray but elements inside can be bcoz they are mutable

// add elements to array
// myArray[0] = "Dave";
// myArray[1] = 1001;
// myArray[2] = false;

// //refer to an array
// console.log(myArray);

// //lenght property
// console.log(myArray.length)

// //last element in array
// console.log(myArray[myArray.length - 1]);

// console.log(myArray[1]);
//array operations
// myArray.push("school") // add something to array at last position
// console.log(myArray)

// myArray.pop(myArray) - to remove last item from an array
// const lastItem = myArray.pop(myArray);
// console.log(lastItem);

// myArray.unshift(42) - add new element in front of aaray
// myArray.unshift(42)
// console.log(myArray)
// myArray.shift(); - remove first item in an array
// const firstItem = myArray.shift(); - prints first item
// console.log(firstItem)

// to delete an item from middle - its not good because it leaves a empty place in mikddle
// delete myArray[1];
//

//.splice(i,i) - removes the complete things btw i,i and it doesnt leave any empty spaces behind
// myArray.splice(1,1);
//splice can also be used to replace in place that had been removed 
// myArray.splice(1,0,42)

// const myArrayA = ['a','b','c']
// const myArrayB = ['d','e','f']
// const newArray = myArray.slice(2,5) 
// myArray.reverse(); // reverse an array
// const newString = myArray.join(); // create a string of all of the elements in an array
// const newArray = newString.split(","); //it will split the string that we created

// console.log(newArray)

// const newArray = myArrayA.concat(myArrayB) //  .concve -joins two arrays
// const newArray = [...myArrayA,...myArrayB] // spread operator it says take the elemts in those arrays and split them out individually and merge them to create new array

// console.log(newArray)

// 1d ,2d, 3d array 
// const equipShelfA = ["basketball","football","volleyball"]
// const equipShelfB = ["basketball","golfball","tennisball"]

// const clothesShelfA = ["tanktops","t-shoirts","jerseys"]
// const clothesShelfB = ["sweet tops","sweatpants","hoodies"]

// console.log(equipShelfA[1]);
// //or
// console.log(clothesShelfB[0]);

// //nested or 2d array
// const equipDept = [equipShelfA,equipShelfB];
// const clothsDept = [clothesShelfA,clothesShelfB];

// console.log(equipDept[0][1])
// console.log(clothsDept[1][0]);

// //3d array
// const sportsStore = [equipDept,clothsDept];
// console.log(sportsStore[0][0][1]);
// console.log(sportsStore[1][1][0];)


// Rock, Paper, Scissors: Refactored with While Loop and an Array
// rock paper scissors- version 2
// let playGame = confirm("Shall we play rock, paper, or scissors?");
// if (playGame) {
//   //play
//   while (playGame) {
//     //used const 
//     const playerChoice = prompt("Please enter rock, paper, or scissors.");
//     if (playerChoice || playerChoice === "") {
//       const playerOne = playerChoice.trim().toLowerCase();
//       if (
//         playerOne === "rock" ||
//         playerOne === "paper" ||
//         playerOne === "scissors"
//       ) {
//         const computerChoice = Math.floor(Math.random() * 3);
//         const rpsArray = ["rock", "paper", "scissors"];
//         const computer = rpsArray[computerChoice];

//         const result =
//           playerOne === computer
//             ? "Tie game!"
//             : playerOne === "rock" && computer === "paper"
//             ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
//             : playerOne === "paper" && computer === "scissors"
//             ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
//             : playerOne === "scissors" && computer === "rock"
//             ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
//             : `playerOne: ${playerOne}\nComputer: ${computer}\nplayerOne wins!`;
//         alert(result);
//         playGame = confirm("Play Again?");
//         if (!playGame) alert("Ok, thanks for playing.");
//         continue; //continue means - Skip the rest of the code inside the current loop iteration, and move to the next iteration.
//       } else {
//         alert("You didn't enter rock, paper, or scissors.");
//         continue;
//       }
//     } else {
//       alert("I guess you changed your mind. Maybe next time.");
//       break;
//     }
//   }
// } else {
//   alert("Ok, maybe next time.");
// }

//rock paper scissor - versions 3

// Rock, Paper, Scissors: Refactored with Functions
//rock paper scissor - versions 3
// const initGame = () => {
//   const startGame = confirm("Shall we play rock, paper, or scissors?");
//   startGame ? playGame() : alert("Ok, maybe next time.");
// };

// Game flow function
// const playGame = () => {
//   while (true) {
//     let playerChoice = getPlayerChoice();
//     playerChoice = formatPlayerChoice(playerChoice);
//     if (playerChoice === "") {
//       invalidChoice();
//       continue;
//     }
//     if (!playerChoice) {
//       decidedNotToPlay();
//       break;
//     }
//     playerChoice = evaluatePlayerChoice(playerChoice);
//     if (!playerChoice) {
//       invalidChoice();
//       continue;
//     }
//     const computerChoice = getComputerChoice();
//     const result = determineWinner(playerChoice, computerChoice);
//     displayResult(result);
//     if (askToPlayAgain()) {
//       continue;
//     } else {
//       thanksForPlaying();
//       break;
//     }
//   }
// };

// const getPlayerChoice = () => {
//   return prompt("Please enter rock, paper, or scissors.");
// };

// const formatPlayerChoice = (playerChoice) => {
//   if (playerChoice || playerChoice === "") {
//     return playerChoice.trim().toLowerCase();
//   } else {
//     return false;
//   }
// };

// const decidedNotToPlay = () => {
//   alert("I guess you changed your mind. Maybe next time.");
// };

// const evaluatePlayerChoice = (playerChoice) => {
//   if (
//     playerChoice === "rock" ||
//     playerChoice === "paper" ||
//     playerChoice === "scissors"
//   ) {
//     return playerChoice;
//   } else {
//     return false;
//   }
// };

// const invalidChoice = () => {
//   alert("You didn't enter rock, paper, or scissors.");
// };

// const getComputerChoice = () => {
//   const randomNumber = Math.floor(Math.random() * 3);
//   const rpsArray = ["rock", "paper", "scissors"];
//   return rpsArray[randomNumber];
// };

// const determineWinner = (player, computer) => {
//   const winner =
//     player === computer
//       ? "Tie game!"
//       : player === "rock" && computer === "paper"
//       ? `playerOne: ${player}\nComputer: ${computer}\nComputer wins!`
//       : player === "paper" && computer === "scissors"
//       ? `playerOne: ${player}\nComputer: ${computer}\nComputer wins!`
//       : player === "scissors" && computer === "rock"
//       ? `playerOne: ${player}\nComputer: ${computer}\nComputer wins!`
//       : `playerOne: ${player}\nComputer: ${computer}\nplayerOne wins!`;

//   return winner;
// // };

// // const displayResult = (result) => {
// //   alert(result);
// // };

// // const askToPlayAgain = () => {
// //   return confirm("Play Again?");
// // };

// // const thanksForPlaying = () => {
// //   alert("Ok, thanks for playing.");
// // };

// // initGame();

// //objects
// //key-value pairs in curly braces
// // const myObj = { name: "dave"}; // object , name- property name
// // // console.log(myObj); // returns- {name: 'dave'}
// // // console.log(myObj.name); // returns - dave
// // const anotherObj = {
// //   alive: true, // alive - property name
// //   answer:42,
// //   hobbies: ["eat","sleep","code"], // array inside object
// //   beverage: { // nested objects
// //     morning:"coffee",
// //     afternoon:"Iced Tea"
// //   },
// //   action: function() { // fxn inside a property of object
// //     return `time for ${this.beverage.morning}`; // this - refers to object
// //   }

// // }
// // //console.log(anotherObj["alive"]) //another way to acess elements inside object
// // //console.log(anotherObj.beverage.morning)
// // console.log(anotherObj.action())

// // const vehicle = {
// //   wheels: 4,
// //   engine: function() {
// //     return "vroooom";

// //   }
// // }
// // //What Object.create() Does

// // // It creates a new object and sets its prototype to the object you pass in.
// // // Here, vehicle is the prototype of truck.
// // // 👉 So truck will “inherit” properties and methods from vehicle.
// // const truck = Object.create(vehicle);
// // truck.doors = 2;
// // console.log(truck);
// // console.log(truck.wheels); // inheritance
// // console.log(truck.engine())

// // const car = Object.create(vehicle);
// // car.doors = 4;
// // car.engine = function () {return "whoosh"};
// // console.log(car.engine());
// // console.log(car.wheels);

// // const tesla = Object.create(car)
// // console.log(tesla.wheels);

// // tesla.engine = function() {return "shhhhhh"};
// // console.log(tesla.engine());

// // const band = {
// //   vocals: "robert plant",
// //   guitar: "jimmy page",
// //   bass:"john paul jones",
// //   drums:"john bonham",
// // };

// // delete band.drums; // deletes drum propery
// // console.log(band.hasOwnProperty("drums"));
// // /**
// //  * hasOwnProperty("key") checks if the object has that key as its own property (not inherited from prototype).
// // Returns true or false.(boolean)
// //  */
// // //What Object.keys() does
// // //It returns an array of all the own enumerable property names (keys) of an object.
// // //In simple words → it gives you all the property names (not values) of the object.
// // console.log(Object.keys(band));
// // /**What Object.values() does
// // It returns an array of all the values of an object’s own enumerable properties.
// // Basically → instead of keys, you get the actual data stored. */
// // console.log(Object.values(band));

// // for (let job in band) {
// //   /**for...in loop
// //    * What happens here?

// // for...in loops over the keys (property names) of an object.
// // job will take each property name from band.
// // band[job] gives the corresponding value.
// //    */
// //   console.log(`on ${job}, its ${band[job]}`); 
// //   /**output-
// //    * on vocals, its Freddie
// // on guitar, its Brian
// // on bass, its John
// // on drums, its Roger
// //  */
// // }

// //destructuring objects

// // const {guitar: myVariable, bass: myBass} = band; //{ guitar: myVariable } → take the value of band.guitar and store it in a new variable called myVariable.
// // console.log(myVariable);
// // console.log(myBass)

// // const {vocals,guitar,bass,drums} = band
// // console.log(guitar);
// // console.log(vocals);

// // function sings({vocals}) {return `${vocals} sings`};
// // console.log(sings(band));

// //classes - blueprint for creating a object in js
// //javascript classes - for js They are syntactic sugar over prototypes. 
// // class Pizza {
// //     constructor(pizzaType, pizzaSize) {
// //         this.type = pizzaType;
// //         this.size = pizzaSize;
// //         this.crust = "original";
// //         this.toppings = [];
// //     }
// // //get pizzaCrust() → lets you read the value like a property.
// // //set pizzaCrust(value) → lets you set/update the value like a property
// //     // get pizzaCrust() {
// //     //     return this.crust;
// //     // }
// //     // set pizzaCrust(pizzaCrust) {
// //     //     this.crust = pizzaCrust;
// //     // }

// //     getCrust() {
// //         return this.crust;
// //     }
// //     setCrust(pizzaCrust) {
// //         this.crust = pizzaCrust;
// //     }
// //     getToppings(topping) {
// //         this.toppings.push(topping);
// //     }
// //     setToppings() {
// //         return this.toppings;
// //     }
// //     bake() {
// //         console.log(`baking a ${this.size}  ${this.type}  ${this.crust} crust pizza`);
// //     }
// // }

// // const myPizza = new Pizza("peppperoni", "small"); 
// // //new → keyword that:
// // // Creates a new empty object {}.
// // // Links it to the prototype of the class (Pizza.prototype).
// // // Runs the constructor method of the class.
// // // Returns the new object.
// // myPizza.setCrust("thin");
// // myPizza.bake();
// // myPizza.setToppings("sausage");
// // myPizza.setToppings("olives")
// // console.log(myPizza.getToppings());

// //parent & child class
// //parent
// // class Pizza {
// //     constructor(pizzaSize) {
// //         this.size = pizzaSize;
// //         this.crust = "original";
// //     }
// //     getCrust() {
// //         return this.crust;
// //     }
// //     setCrust(pizzaCrust) {
// //         this.crust = pizzaCrust;
// //     }
// // }
// // //child
// // class SpecialityPizza extends Pizza{
// //     constructor(pizzaSize){
// //         super(pizzaSize);
// //         this.type = "the works"
// //     }
// //     slice() {
// //         console.log(`our ${this.type} ${this.size} pizza has 8 slices`);
// //     }
// // }

// // const mySpecialty = new SpecialityPizza("meduim");
// // mySpecialty.slice();
// //-----------------------------------------

// //naming Conventions
// // use uderscore(_) to i ndicate to others that are intended to be private
// // class Pizza {
// //     constructor(pizzaSize) {
// //         this._size = pizzaSize;
// //         this._crust = "original";
// //     }
// //     getCrust() {
// //         return this._crust;
// //     }
// //     setCrust(pizzaCrust) {
// //         this._crust = pizzaCrust;
// //     }
// // }

// // //factory function - another way to create an object in js and you cant access its properties by using (.)
// // function pizzaFactory(pizzaSize) {
// //     const crust = "original";
// //     const size = pizzaSize;
// //     return {
// //         bake: () => console.log(`baking a ${size} ${crust} crust pizza.`)   //() => this shows that bake is a function
// //     };
// // }
// // const myPizza = pizzaFactory("small");
// // myPizza.bake();

// //private filed class (use # before objetc)
// // class Pizza {
// //     crust = "original";
// //     #sauce = "trdition";  // indication of private field
// //     constructor(pizzaSize) {
// //         this.size = pizzaSize;
// //         this.crust = "original";
// //     }
// //     getCrust() {
// //         return this.crust;
// //     }
// //     setCrust(pizzaCrust) {
// //         this.crust = pizzaCrust;
// //     }
// //     hereYouGo() {
// //         console.log(`here's your ${this.crust} ${this.#sauce} sauce ${this.#sauce} pizza`)
// //     }
// // }

// // const myPizza = new Pizza ("large");
// // myPizza.hereYouGo();
// // console.log(myPizza.);

// //JSON: javascript object notation
// /**
//  JSON is used to send or receive data
//  JSON is a text format that is completely language independent
//  Meaning JSON is used to send & receive data in many language
//  ...not just in javascript.
//  */

// const myObj = {
//     name: "dave",
//     hobbies: ["eat","sleep","code"],
//     hello: function() {
//         console.log("hello!!");
//     }

// };
// console.log(myObj);
// console.log(myObj.name);
// myObj.hello()
// console.log(typeof myObj);

// const sendJSON = JSON.stringify(myObj); 
// /**JSON.stringify() → converts a JavaScript object (myObj) into a JSON string.
// The result is stored in sendJSON */
// console.log(sendJSON);
// console.log(typeof sendJSON);
// console.log(sendJSON.nameame);

// const receiveJSON = JSON.parse(sendJSON);
// /**reverse of JSON.stringify
//  * JSON.parse() → converts a JSON string back into a JavaScript object.
//  receiveJSON will now be a normal object you can use. */
// console.log(receiveJSON);
// console.log(typeof receiveJSON)

// // javascript errors and error handeling
// "use strict"
// //variable = "dave" // ReferenceError: variable is not defined

// //Object..create(); // SyntaxError

// // const name = "Dave"; //TypeError: Assignment to constant variable.
// // name = "joe"

// // console.error() → show errors ❌
// // console.warn() → show warnings ⚠️
// // console.table() → show data neatly in a table

// //In JavaScript, error handling is done using try...catch...finally.
// // try {
// //   // Code that may throw an error
// // } catch (err) {
// //   // Code to handle the error
// // } finally {
// //   // Code that always runs (optional)
// // }
// /**try → Wraps code that might throw an error.

// catch → Executes if an error occurs inside try.

// finally → Always executes, whether an error happened or not (used for cleanup tasks). */

// // const makeError = () => {
// //     let i = 1;
// //     while (i <= 5) {
// //         try {
// //             if(i % 2 !=0){
// //                 throw new Error("odd number")
// //             }
// //             console.log("even number")
// //     //    throw new Error("this is a custom error") //throw new CustomError("msg") → actually throws your defined error.
// //     }catch(err){
// //         console.error(err.name)
// //         console.error(err.message)
// //         console.error(err.stack)

// //         // console.error(err.stack); // console.error(err.stack) prints the stack trace (where and why the error happened).
        
// //     } finally {
// //         console.log("...finally");
// //         i++;
// //     }
// //     }
// // }
// // makeError();

// // // function customError(message) {
// // //     this.message = message;
// // //     this.name = "customError";
// // //     this.stack = `${this.name}: ${this.message}`;

// // // }


// // DOM - Document Object Model

// //select an elemnt by id
// const view1 = document.getElementById("view1");
// /**document → represents the whole webpage (DOM).
// .getElementById("view1") → looks for an element in the HTML with id="view1".
// const view1 → stores that element in a variable */
// console.log(view1)

// const view2 = document.querySelector("#view2")
// /**document.querySelector(selector) → selects the first element that matches a CSS selector.
// "#view2" → is a CSS id selector (the # means "id").
// So it will find the element in the HTML with id="view2" */
// console.log(view2);

// //That code is changing the CSS display property of the two elements you selected (view1 and view2)
// //.style.display → directly modifies the inline CSS of the element.
// //"flex" → makes the element a flex container (so its children will align according to CSS Flexbox rules).
// view1.style.display = "flex";
// view2.style.display = "flex";

// /** 
//  document → represents the whole webpage (DOM).  
//  .getElementsByClassName("view") → finds all elements with class="view".  
//  const views → stores the HTMLCollection (list of elements).  
// */
// const views = document.getElementsByClassName("view");
// console.log(views)


// /** 
//  document → represents the whole webpage (DOM).  
//  .querySelectorAll('.view') → finds **all elements** with class="view".  
//  const sameViews → stores a NodeList (collection of elements, similar to an array).  
// */
// const sameViews = document.querySelectorAll('.view');
// console.log(sameViews);

// /** 
//  Selects all <div> inside view1. 
//  Returns a static NodeList (doesn’t update if DOM changes). 
// */
// const divs = view1.querySelectorAll("div");
// console.log(divs);


// /** 
//  Selects all <div> inside view1. 
//  Returns a live HTMLCollection (auto-updates when DOM changes). 
// */
// const sameDivs = view1.getElementsByTagName("div");
// console.log(sameDivs);


// /** 
//  Selects only even <div> elements inside view1 
//  using CSS nth-of-type(2n). 
// */
// const evenDivs = view1.querySelectorAll("div:nth-of-type(2n)");
// console.log(evenDivs);


// /** 
//  Loops through evenDivs and changes styles. 
// */
// for (let i = 0; i < evenDivs.length; i++) {
//     evenDivs[i].style.backgroundColor = "darkblue";
//     evenDivs[i].style.width = "200px";
//     evenDivs[i].style.height = "200px";
// }


// /** 
//  Selects <h1> inside <nav>. 
// */
// const navText = document.querySelector("nav h1");
// console.log(navText);

// /** 
//  Changes the text of the <h1>. 
// */
// navText.textContent = "hello world";


// /** 
//  Selects the <nav> element. 
//  Replaces its HTML content. 
// */
// const navbar = document.querySelector("nav");
// navbar.innerHTML = `<h1>hello </h1> this should align right`;
// console.log(navbar);

// /** 
//  Sets flex alignment. 
// ⚠️ Typo: should be "space-between", not "flex-betweeen". 
// */
// navbar.style.justifyContent = "space-between";


// /** 
//  DOM traversal examples using evenDivs[0]. 
// */
// console.log(evenDivs[0]);                          // First even <div>
// console.log(evenDivs[0].parentElement);            // Parent element
// console.log(evenDivs[0].parentElement.children);   // HTMLCollection of children
// console.log(evenDivs[0].parentElement.childNodes); // NodeList (elements + text + comments)
// console.log(evenDivs[0].parentElement.hasChildNodes()); // true/false
// console.log(evenDivs[0].parentElement.lastElementChild); // Last child element
// console.log(evenDivs[0].parentElement.firstChild);       // First child node (could be text)
// console.log(evenDivs[0].parentElement.firstElementChild);// First child element
// console.log(evenDivs[0].nextSibling);              // Next node (could be text)
// console.log(evenDivs[0].nextElementSibling);       // Next element node
// console.log(evenDivs[0].previousSibling);          // Previous node
// console.log(evenDivs[0].previousElementSibling);   // Previous element node (⚠️ you had a typo here)


// /** 
//  Switches views: hides view1, shows view2 as a flex container. 
// */
// view1.style.display = "none";
// view2.style.display = "flex";
// view2.style.flexDirection = "row";
// view2.style.flexWrap = "wrap";
// view2.style.margin = "10px";


// /** 
//  Removes all children of view2 (clears it). 
// */
// while(view2.lastChild) {
//     view2.lastChild.remove();
// }


// /** 
//  Function to create a new styled <div> with text inside, 
//  and append it to a parent element. 
// */
// const createDivs = (parent, iter) => {
//     const newDiv = document.createElement("div");
//     newDiv.textContent = iter;
//     newDiv.style.backgroundColor = "#000";
//     newDiv.style.width = "100px";
//     newDiv.style.height = "100px";
//     newDiv.style.margin = "10px";
//     newDiv.style.display = "flex";
//     newDiv.style.justifyContent = "center";
//     newDiv.style.alignItems = "center";
//     parent.append(newDiv);
// }


// /** 
//  Creates 12 numbered divs inside view2. 
// */
// for (let i = 1; i <= 12; i++) {
//     createDivs(view2, i);
// }


/**<script src="script.js" defer></script>
defer -It tells the browser to download the script file in the background while the HTML is still being parsed.
The script will only execute after the HTML document has been fully parsed, but before the DOMContentLoaded event.
*/

// javascript event listners
view1.style.display = "none";
view2.style.display = "flex"; 
view3.style.display = "none"; 

// const view = document.querySelector("#view2");
/**
 * Selects the element with id="view2" from the whole document.
 * Stores it in 'view'.
 */

// const div = view.querySelector("div");
/**
 * Inside 'view', finds the first <div> element.
 * Stores it in 'div'.
 */

// const h2 = div.querySelector("h2");
/**
 * Inside 'div', finds the first <h2> element.
 * Stores it in 'h2'.
 */

// Syntax: addEventListner(event(ie. "click"), function, useCapture)
/**element.addEventListener(event, function, useCapture);

/**
 * event       → The type of event to listen for (e.g., "click", "mouseover", "keydown").
 * function    → The callback function to run when the event happens.
 * useCapture  → (Optional, true/false) 
 *               false (default) → event is handled in bubbling phase (from inside → out).
 *               true     q       → event is handled in capturing phase (from outside → in).
 */
 

// Example 1: Adding and Removing Event Listeners
// ----------------------------------------------

// const doSomething = () => {
//     alert("doing something");
// }

// h2.addEventListener("click", doSomething, false);   // attaches listener
// h2.removeEventListener("click", doSomething, false); // removes listener


// Example 2: Inline event function with event object
// --------------------------------------------------
// h2.addEventListener("click", function (event) {
//     console.log(event.target);          // shows which element triggered the event
//     event.target.textContent = "clicked"; // changes text when clicked
// })



/**
 * event.stopPropagation():
 * ------------------------
 * - Prevents the event from bubbling up or capturing down.
 * - Only the target element’s handler runs.
 * - Useful if parent/ancestor elements also have click listeners.
 */



// Example 3: DOMContent readiness check
// -------------------------------------
// document.addEventListener("readystatechange", (event) => {
//     if (event.target.readyState === "complete") {  // DOM fully loaded
//         console.log("readyState: complete");
//         initApp();   // run init function after page is ready
//     }
// })


// Example 4: initApp() function with multiple event listeners
// -----------------------------------------------------------
// const initApp = () => {
//     const view = document.querySelector("#view2");
//     const div = view.querySelector("div");
//     const h2 = div.querySelector("h2");

//     // Toggle background colors on view
//     view.addEventListener("click", (event) => {
//         view.classList.toggle("purple");
//         view.classList.toggle("darkblue");
//     }, false);

//     // Toggle colors on inner div
//     div.addEventListener("click", (event) => {
//         div.classList.toggle("blue");
//         div.classList.toggle("black");
//     }, false);

//     // Toggle h2 text on click
//     h2.addEventListener("click", (event) => {
//         const myText = event.target.textContent;

//         myText === "My 2nd View"
//             ? event.target.textContent = "Clicked"
//             : event.target.textContent = "My 2nd View";
//     }, false);

//     // Example 5: Mouse events on navigation
//     // --------------------------------------
//     const nav = document.querySelector("nav")
//     nav.addEventListener("mouseover", (event) => {
//         event.target.classList.add("height100"); // expand height
//     });
//     nav.addEventListener("mouseout", (event) => {
//         event.target.classList.remove("height100"); // shrink back
//     });
// };


// // Example 6: Another DOM readiness + form submit
// // ----------------------------------------------
// document.addEventListener("readystatechange", (event) => {
//     if (event.target.readyState === "complete") {
//         console.log("readyState: complete");
//         initApp();
//     }
// });

// // Form handling with preventDefault()
// const initApp2 = () => {
//     const view3 = document.querySelector("#view3");
//     const myForm = view3.querySelector("#myForm");

//     myForm.addEventListener("submit", (event) => {
//         event.preventDefault();   // stops form from refreshing page
//         console.log("submit event");
//     });
// };

// Web Storage API
// ---------------
// - Not part of the DOM → belongs to the Window API.
// - Accessed in JS via the global object: window.
// - We don’t need to type "window.localStorage" → just "localStorage" works.

// const myArray = ["eat", "sleep", "code"];
// const myObject = {
//     name: "Dave",
//     hobbies: ["eat", "sleep", "code"],
//     logName: function () {
//         console.log(this.name);
//     }
// };


// // ---------------------
// // SESSION STORAGE
// // ---------------------
// // sessionStorage.setItem("mySessionStore", JSON.stringify(myArray));
// //   → Stores myArray in sessionStorage (only lasts until the tab/browser closes).
// //
// // const mySessionData = JSON.parse(sessionStorage.getItem("mySessionStore"));
// //   → Retrieves it back as a JS object/array (needs JSON.parse).
// //
// // console.log(mySessionData);


// // ---------------------
// // LOCAL STORAGE
// // ---------------------
// localStorage.setItem("myLocalStore", JSON.stringify(myArray));
// //   → Stores myArray in localStorage (persists even after closing/restarting browser).

// // localStorage.removeItem("myLocalStore")
// //   → Removes just "myLocalStore".

// // localStorage.clear()
// //   → Clears ALL items from localStorage.

// // const key = localStorage.key(0);
// //   → Gets the key name at index 0.

// const storeLength = localStorage.length;
// //   → Number of stored items in localStorage.

// const myLocalData = JSON.parse(localStorage.getItem("myLocalStore"));
// //   → Retrieves "myLocalStore" and converts string → JS array.

// console.log(storeLength);


// Quick Notes:
// sessionStorage → temporary (per tab/session).
// localStorage → permanent (stays until manually cleared).
// setItem(key, value) → save.
// getItem(key) → retrieve.
// removeItem(key) → delete one.
// clear() → delete all.
// Always use JSON.stringify when saving arrays/objects, and JSON.parse when retrieving them.

// --------------------------
// MODULES
// --------------------------

// HTML side → need to use type="module"
// <script type="module" src="js/main.js"></script>

/**
 * guitars.js
 * ----------
 * export function playGuitar() {
 *   return "playing guitar";
 * }
 *
 * export const shredding = () => {
 *   return "shredding some licks";
 * }
 *
 * export const plucking = () => {
 *   return "plucking the string...";
 * }
 *
 * // default export (optional):
 * // export default playGuitar;
 */

// -------- Import Example --------
// import playGuitar from "./guitars.js";  // default import
// import { shredding as shred, plucking as fingerPicking } from "./guitars.js"; // named imports
// console.log(playGuitar());
// console.log(shred());
// console.log(fingerPicking());



// --------------------------
// EXPORTING A CLASS (user.js)
// --------------------------
/**
 * export default class User {
 *   constructor(email, name) {
 *     this._id = email;
 *     this._name = name;
 *   }
 *
 *   greeting() {
 *     return `hi my name is ${this._name}`;
 *   }
 * }
 */

// -------- Import Example --------
// import User from "./user.js";
// const me = new User("email@email.com", "dave");
// console.log(me);               // entire object
// console.log(me.greeting());    // "hi my name is dave"


// --------------------------
// IMPORTING EVERYTHING (*)
// --------------------------
// import * as Guitars from "./guitars.js"
// console.log(Guitars.playGuitar());
// console.log(Guitars.shredding());
// console.log(Guitars.plucking());



// --------------------------
// HIGHER ORDER FUNCTIONS
// --------------------------
/**
 * A Higher Order Function:
 * - Takes one or more functions as arguments
 * - OR returns a function as its result
 *
 * Examples: forEach, filter, map, reduce
 */

// import { posts } from "./posts.js";   // assume posts = [{id, userId, title}, ...]

/** forEach() → loops through array */
 // posts.forEach(post => {
 //     console.log(post);
 // });

/** filter() → returns a new array with condition */
 // const filteredPosts = posts.filter(post => post.userId === 10);
 // console.log(filteredPosts);

/** map() → transforms data */
 // const mappedPosts = filteredPosts.map(post => post.id * 10);
 // console.log(mappedPosts);

/** reduce() → reduces array to single value */
 // const reducedPostsValues = mappedPosts.reduce((sum, post) => sum + post);
 // console.log(reducedPostsValues);

 //Fetch API requires a discussion of..
 // callbacks, promises, thenables, and Async/Await

 //Callbacks - used no more(promises are used)

//  function firstFunction(parameters, callback) {
//     //do stuff
//     callback();
//  }

//  // AKA "callback hell"
//  firstFunction(para, function() {
//     //do stuff
//     secondFunction(para,function(){
//         thirdFunction(para, function(){

//         })
//     })
//  })

//promise
/**What is a Promise in JavaScript?

A Promise is an object that represents the result of an asynchronous operation (something that will finish in the future).
It can be in one of three states:

Pending → operation is still running (initial state).

Fulfilled → operation finished successfully (resolved).

Rejected → operation failed (error). */ 

// --------------------------
// PROMISES (3 States)
// --------------------------

/**
 * A Promise has 3 states:
 * 1. pending   → initial state (not fulfilled or rejected yet)
 * 2. fulfilled → operation completed successfully
 * 3. rejected  → operation failed
 */

// const myPromise = new Promise((resolve, reject) => {
//   const error = false;
//   if (!error) {
//     resolve("✅ Promise resolved!");
//   } else {
//     reject("❌ Promise rejected!");
//   }
// });

// // Handling with .then() and .catch()
// myPromise
//   .then(value => value + " (extra data added)")
//   .then(newValue => console.log(newValue))
//   .catch(err => console.error(err));


// // --------------------------
// // PROMISE with setTimeout
// // --------------------------

// const myNextpromise = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("⏳ myNextPromise resolved after 3 seconds");
//   }, 3000);
// });

// myNextpromise.then(value => console.log(value));


// // --------------------------
// // FETCH API → Pending State
// // --------------------------

// /**
//  * fetch() returns a Promise
//  * By default → GET request
//  */
// const users = fetch("https://jsonplaceholder.typicode.com/posts");
// console.log(users); // Promise { <pending> }


// // --------------------------
// // FETCH + .then()
// // --------------------------

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then(response => response.json())
//   .then(data => {
//     data.slice(0, 3).forEach(user => console.log(user)); // show 3 users
//   });


// // --------------------------
// // ASYNC / AWAIT
// // --------------------------

// /**
//  * async → makes a function return a Promise
//  * await → pauses execution until the Promise resolves
//  * (syntactic sugar over .then() / .catch())
//  */

// const myUsers = { userList: [] };

// const myCoolFunction = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const jsonUserData = await response.json();
//   return jsonUserData;
// };

// const anotherFunc = async () => {
//   const data = await myCoolFunction();
//   myUsers.userList = data;
//   console.log(myUsers.userList);
// };

// anotherFunc();
// console.log(myUsers.userList); // Still [] here because fetch is async


// // --------------------------
// // WORKFLOW Example
// // --------------------------

// /**
//  * Goal → Extract only user emails
//  */
// const getAllUserEmails = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const jsonUserData = await response.json();

//   const userEmailArray = jsonUserData.map(user => user.email);
//   postToWebPage(userEmailArray);
// };

// const postToWebPage = (data) => {
//   console.log(data);
// };

// getAllUserEmails();


// // --------------------------
// // FETCH with HEADERS (Dad Jokes API)
// // --------------------------

// /**
//  * Some APIs require headers
//  */
// const getDadJoke = async () => {
//   const response = await fetch("https://icanhazdadjoke.com/", {
//     method: "GET",
//     headers: {
//       Accept: "application/json"
//     }
//   });

//   const jsonJokeData = await response.json();
//   console.log(jsonJokeData.joke);
// };

// getDadJoke();


// // --------------------------
// // POST Request
// // --------------------------

// /**
//  * GET → Just fetch data
//  * POST → Send data (usually JSON in body)
//  */

// const jokeObject = {
//   id: "0o071Sv4eD",
//   joke: "Why was it called the dark ages? Because of all the knights."
// };

// const postData = async (jokeObj) => {
//   const response = await fetch("https://httpbin.org/post", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(jokeObj)
//   });

//   const jsonResponse = await response.json();
//   console.log(jsonResponse.headers); // echo back headers
// };

// postData(jokeObject);


// // --------------------------
// // GET Request with Params (ICNDB API)
// // --------------------------

// const requestJoke = async (firstName, lastName) => {
//   const response = await fetch(
//     `http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}&limitTo=[nerdy]`
//   );

//   const jsonResponse = await response.json();
//   console.log(jsonResponse.value.joke);
// };

// requestJoke("Clint", "Eastwood");


// // --------------------------
// // ABSTRACTED WORKFLOW (JokeAPI)
// // --------------------------

// /**
//  * Step 1 → Build request URL
//  * Step 2 → Fetch joke
//  * Step 3 → Post to page
//  */

// const buildRequestUrl = (requestData) => {
//   const category = requestData.categories?.[0] || "Any";
//   return `https://v2.jokeapi.dev/joke/${category}`;
// };

// const requestCustomJoke = async (url, firstName, lastName) => {
//   const response = await fetch(url);
//   const jsonResponse = await response.json();

//   let joke = jsonResponse.type === "single"
//     ? jsonResponse.joke
//     : `${jsonResponse.setup} ... ${jsonResponse.delivery}`;

//   // Replace "Chuck Norris" with custom names
//   joke = joke.replace(/Chuck Norris/gi, `${firstName} ${lastName}`);

//   postJokeToPage(joke);
// };

// const postJokeToPage = (joke) => {
//   console.log(joke);

//   // Optional → display on webpage
//   const div = document.getElementById("jokeBox");
//   if (div) div.textContent = joke;
// };

// const processJokeRequest = async () => {
//   const requestData = {
//     firstName: "Bruce",
//     lastName: "Lee",
//     categories: ["Programming"] // Categories: Programming, Misc, Dark, Pun, Spooky, Christmas
//   };

//   const requestUrl = buildRequestUrl(requestData);
//   await requestCustomJoke(requestUrl, requestData.firstName, requestData.lastName);
//   console.log("🎉 Finished!");
// };

// processJokeRequest();

//Regular expressions
//Regular expressions are patterns used to match text, e.g., finding email addresses, phone numbers, or specific words in a string.
// ================================
// 📌 REGEX CHEAT SHEET (Quick Ref)
// ================================

// ----------- 1. CHARACTERS -----------
// .        → Any character except newline (\n)
// \d       → Digit (0-9)
// \D       → Non-digit
// \w       → Word char [a-zA-Z0-9_]
// \W       → Non-word char
// \s       → Whitespace (space, tab, newline)
// \S       → Non-whitespace
// \t       → Tab
// \n       → Newline
// \r       → Carriage return

// ----------- 2. ANCHORS -----------
// ^        → Start of string/line
// $        → End of string/line
// \b       → Word boundary (between \w and \W)
// \B       → Not a word boundary
// \A       → Start of string (ignores multiline mode)
// \Z       → End of string

// ----------- 3. QUANTIFIERS -----------
// *        → 0 or more
// +        → 1 or more
// ?        → 0 or 1 (optional)
// {n}      → Exactly n times
// {n,}     → n or more times
// {n,m}    → Between n and m times
// NOTE: Add "?" to make quantifier lazy → e.g., .*?

// ----------- 4. GROUPING -----------
// (abc)    → Capturing group
// (?:abc)  → Non-capturing group
// (?<name>abc) → Named capturing group
// \1 \2    → Backreference to group 1, 2, ...

// ----------- 5. ALTERNATION -----------
// a|b      → Match "a" or "b"

// ----------- 6. CHARACTER CLASSES -----------
// [abc]    → Match a, b, or c
// [^abc]   → Match NOT a, b, or c
// [a-z]    → Range (lowercase letters)
// [A-Z]    → Uppercase letters
// [0-9]    → Digits
// [a-zA-Z0-9_] → Same as \w

// ----------- 7. ESCAPING -----------
// \.       → Literal dot
// \\       → Literal backslash
// \*       → Literal asterisk
// (Any meta-character escaped with \)

// ----------- 8. LOOKAROUNDS -----------
// (?=...)  → Positive lookahead (must be followed by ...)
// (?!...)  → Negative lookahead (must NOT be followed by ...)
// (?<=...) → Positive lookbehind (must be preceded by ...)
// (?<!...) → Negative lookbehind (must NOT be preceded by ...)

// ----------- 9. FLAGS / MODIFIERS -----------
// (?i)     → Case-insensitive
// (?m)     → Multiline (^ and $ work per line)
// (?s)     → Dotall (. matches newline)
// (?x)     → Free-spacing mode (ignore spaces & allow comments)

// ----------- 10. COMMON EXAMPLES -----------
// Phone Number (123-456-7890):
//   \d{3}-\d{3}-\d{4}
//
// Email:
//   [\w._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}
//
// Hex Color (#fff or #ffffff):
//   #([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})
//
// URL (basic):
//   https?:\/\/[^\s/$.?#].[^\s]*
//
// Only Letters:
//   ^[A-Za-z]+$
//
// Only Numbers:
//   ^\d+$

//-----------------------------------------------------

//Applying RegEx in JavaScript

// PHONE NUMBER VALIDATION
// document.getElementById("phoneNum").addEventListener("input", (event) => {
//   // Matches formats like: (123) 456-7890, 123-456-7890, 123.456.7890, 1234567890
//   const regex = /^\(?(\d{3})\)?[-. ]?(\d{3})[-. ]?(\d{4})$/;
//   const input = document.getElementById("phoneNum");
//   const format = document.querySelector(".phoneFormat");

//   const phone = input.value; // ✅ use .value, not .ariaValueMax
//   const found = regex.test(phone);

//   if (!found && phone.length) {
//     input.classList.add("invalid");
//     format.classList.add("block");
//   } else {
//     input.classList.remove("invalid");
//     format.classList.remove("block");
//   }
// });

// // ON FORM SUBMIT -> Save Clean Phone Number
// document.getElementById("phoneForm").addEventListener("submit", (event) => {
//   event.preventDefault();

//   const input = document.getElementById("phoneNum");
//   const regex = /[()\- .]/g; // remove brackets, dashes, dots, spaces
//   const savedPhoneNum = input.value.replaceAll(regex, "");

//   console.log("Clean Phone:", savedPhoneNum);
// });

// // TEXT FORM CLEANUP
// document.getElementById("textForm").addEventListener("submit", (event) => {
//   event.preventDefault();

//   const input = document.getElementById("textEntry");
//   const regex = / {2,}/g; // multiple spaces
//   const newText = input.value.replaceAll(regex, " ").trim();

//   console.log("Clean Text:", newText);

//   // Encode text safely for URLs
//   const encodedInputText = encodeURI(input.value);
//   const encodedCleanText = encodeURI(newText);

//   console.log("Encoded Original:", encodedInputText);
//   console.log("Encoded Clean:", encodedCleanText);
// });
