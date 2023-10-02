// Assignment Code
var generateBtn = document.querySelector("#generate");

//Will I need this?
var finalPassword = "";

// could not add special character " and ] as they seem to destroy the array
var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];

var lowerCaseLetters = ["a", "b", "c", "d", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

var specialCharacters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "`", "{", "|", "}", "~",];

var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var numOfCharaters = "";

var finalArr = [];

// I need to ask the user a list of questions to generate their password
function getPrompts() {
  finalArr = [];
  numOfCharaters = prompt("How many characters do you want in your password?")
  //  // I Googled how to confirm and concat this option.
  if (confirm("Do you need uppercase letters in your password?")) {
    finalArr = finalArr.concat(upperCaseLetters);
  }
  if (confirm("Do you need lowercase letters in your password?")) {
    finalArr = finalArr.concat(lowerCaseLetters);
  }
  if (confirm("Do you need special characters in your password?")) {
    finalArr = finalArr.concat(specialCharacters);
  }
  if (confirm("Do you need numbers in your password?")) {
    finalArr = finalArr.concat(numbers);
  }
  return true;
}

function generatePassword() {
  // this should generate a new password based on the prompts asked above with the for loop
  var finalPassword = "";
  for (var i = 0; i < numOfCharaters; i++)
    var randomIndex = Math.floor(Math.random() * finalArr.length)
  finalPassword = password + finalArr[randomIndex];
  return finalPassword;
}

// No Touch Write password to the #password input
function writePassword() {
  getPrompts()
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

