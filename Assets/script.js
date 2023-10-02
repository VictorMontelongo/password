// Assignment Code
var generateBtn = document.querySelector("#generate");

//Will I need this?
var finalPassword = ""

// could not add special character " and ] as they seem to destroy the array
var specialCharacters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "`", "{", "|", "}", "~",];

var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var lowerCaseLetters = ["a", "b", "c", "d", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];

var finalArr = []

// I need to ask the user a list of questions to generate their password
function getPrompts() {
  finalArr = [];
  numberOfCharaters = prompt("How many characters do you want in your password?")
  //  // I Googled how to confirm and concat this option.
  if (confirm("Do you need uppercase letters in your password?")) {
    choiceArr = choiceArr.concat(upperCaseLettersrCaseLetters);
  }
  if (confirm("Do you need lowercase letters in your password?")) {
    choiceArr = choiceArr.concat(lowerCaseLetters);
  }
  if (confirm("Do you need special characters in your password?")) {
    choiceArr = choiceArr.concat(specialCharacters);
  }
  if (confirm("Do you need numbers in your password?")) {
    choiceArr = choiceArr.concat(numbers);
  }
  return true;
}

function generatePassword() {
  // this should generate a new password based on the prompts asked above
  var password = "";
  for (var i = 0; i < characterLength; i++)
    var randomIndex = Math.floor(Math.random() * finalArr.length)
  password = password + finalArr[randomIndex];
  return password;
}

// No Touch Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

