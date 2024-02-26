// variable arrays for password generator
var charLength = 128;
var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialcharArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", ".", "?"];

var choiceArray = [];


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("Generate Password Button Clicked")

  // 1. prompt the user for the password criteria 
  //   a. Password length 8 < 128
  //   b. choose to include lowercase, uppercase, numeric, and/or special characters
    var length = prompt("Choose your password length from 8-128")
    var lowercase = prompt("Would you like to use lowercase letters?")
    var uppercase = prompt("would you like to use uppercase letters?")
    var number = prompt("Would you like to include numbers?")

  // 2. Selecting a prompt will be validated--validate the input 
  // 3. At least one character type should be selected
  // 4. Password is generated after all prompts are answered



  // 5. Password is displayed in an alert or written to the page
    return "Generated password will go here"
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
