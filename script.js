//Light Bulb Experiment
var input = prompt("Enter 1 to turn on or 0 to turn off:");
if (input === "1") {
  console.log("The light is ON");
} else if (input === "0") {
  console.log("The light is OFF");
} else {
  console.log("Invalid Input");
}

//Traffic Light Simulator
var color = prompt(
  "Enter traffic light color (Red, Yellow, Green):"
).toLowerCase();
if (color === "red") {
  console.log("Stop");
} else if (color === "yellow") {
  console.log("Slow Down");
} else if (color === "green") {
  console.log("Go");
} else {
  console.log("Invalid Color");
}

//Water Temperature Checker
var temperature = parseFloat(prompt("Enter water temperature in Celsius:"));
if (temperature <= 0) {
  console.log("Freezing");
} else if (temperature > 0 && temperature <= 15) {
  console.log("Cold");
} else if (temperature > 15 && temperature <= 30) {
  console.log("Warm");
} else {
  console.log("Hot");
}

//Rock-Paper-Scissors Game
var player1 = prompt("Player 1: Enter rock, paper, or scissors:").toLowerCase();
var player2 = prompt("Player 2: Enter rock, paper, or scissors:").toLowerCase();

if (player1 === player2) {
  console.log("It's a Tie!");
} else if (
  (player1 === "rock" && player2 === "scissors") ||
  (player1 === "paper" && player2 === "rock") ||
  (player1 === "scissors" && player2 === "paper")
) {
  console.log("Player 1 Wins");
} else {
  console.log("Player 2 Wins");
}

//Simple Alarm System
var doorOpen = prompt("Is the door open? (yes/no):").toLowerCase();
var motionDetected = prompt("Is motion detected? (yes/no):").toLowerCase();

if (doorOpen === "yes" || motionDetected === "yes") {
  console.log("Alarm Triggered");
} else {
  console.log("All Safe");
}

//Simple Temperature Conversion
var choice = parseInt(
  prompt("Enter 1 for Celsius to Fahrenheit, 2 for Fahrenheit to Celsius:")
);
var temperature = parseFloat(prompt("Enter the temperature:"));

if (choice === 1) {
  console.log(`Temperature in Fahrenheit: ${(temperature * 9) / 5 + 32}`);
} else if (choice === 2) {
  console.log(`Temperature in Celsius: ${((temperature - 32) * 5) / 9}`);
} else {
  console.log("Invalid Choice");
}

//Password Strength Checker
var password = prompt("Enter your password:");

if (password.length >= 8) {
  console.log("Strong Password");
} else if (password.length >= 5) {
  console.log("Moderate Password");
} else {
  console.log("Weak Password");
}

if (/\d/.test(password) || /[^a-zA-Z0-9]/.test(password)) {
  console.log("Contains numbers or special characters");
}

//Coin Toss Simulator
var userChoice = parseInt(prompt("Enter 1 for Heads or 0 for Tails:"));
var tossResult = Math.floor(Math.random() * 2);

console.log(`Coin Toss Result: ${tossResult === 1 ? "Heads" : "Tails"}`);
if (userChoice === tossResult) {
  console.log("You Win!");
} else {
  console.log("You Lose!");
}

//Weather Suggestion Experiment
var weather = prompt("Enter the weather (Sunny, Rainy, Cold):").toLowerCase();

if (weather === "sunny") {
  console.log("Wear sunglasses");
} else if (weather === "rainy") {
  console.log("Take an umbrella");
} else if (weather === "cold") {
  console.log("Wear a jacket");
} else {
  console.log("Invalid weather condition");
}

//Simple Arithmetic Quiz
var num1 = Math.floor(Math.random() * 10) + 1;
var num2 = Math.floor(Math.random() * 10) + 1;
var operators = ["+", "-", "*", "/"];
var operator = operators[Math.floor(Math.random() * operators.length)];
let correctAnswer;

switch (operator) {
  case "+":
    correctAnswer = num1 + num2;
    break;
  case "-":
    correctAnswer = num1 - num2;
    break;
  case "*":
    correctAnswer = num1 * num2;
    break;
  case "/":
    correctAnswer = (num1 / num2).toFixed(2);
    break;
}

var userAnswer = parseFloat(prompt(`What is ${num1} ${operator} ${num2}?`));
if (userAnswer === parseFloat(correctAnswer)) {
  console.log("Correct!");
} else {
  console.log(`Try Again! The correct answer is ${correctAnswer}`);
}

//Eligibility for Voting
var age = parseInt(prompt("Enter your age:"));

if (age >= 18) {
  console.log("You are eligible to vote.");
} else {
  console.log("You are not eligible to vote.");
}

//Maximum of Two Numbers
var num1 = parseFloat(prompt("Enter the first number:"));
var num2 = parseFloat(prompt("Enter the second number:"));

if (num1 > num2) {
  console.log(`The larger number is ${num1}`);
} else if (num2 > num1) {
  console.log(`The larger number is ${num2}`);
} else {
  console.log("Both numbers are equal");
}
