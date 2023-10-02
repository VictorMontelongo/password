// Assignment Code
var generateBtn = document.querySelector("#generate");
// could not add special character " and ] as they seem to destroy the array
var SpecialCharacters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "`", "{", "|", "}", "~",];

var Numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var Letters = ["a", "b", "c", "d", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];

var numberofCharacters;
var includeNumbers;
var includeSpecialCharacters;

var finalPassword = "";

// Job to generate a random number 
function getARandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getARandomSpecialCharacter() {

  return SpecialCharacters.substr(Math.floor(s.length * Math.random()), 1);
}

function getARandomLetter() {
  for (var i = 0; i < 0; i++) {
    result += Letters.charAt(Math.floor(Math.random() * Letters.length));
  }
}

function generatePassword() {

  includeNumbers = confirm("Do you want numbers?")

  var randomNumber = getARandomNumber()

  finalPassword = finalPassword + randomNumber;

  //prompt
  var name = prompt("What is your name");
  //confirm

  return ""
}

// No Touch Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
