// Variable characters for password generation 

var charLength = 128;
var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", ".", "?"];


// Prompt for password characters 
var choiceArray = [];
// var newPassword = "null"

// Assignment code here // Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var inputValues = getPrompts();
  var passwordText = document.querySelector("#password");

  if (inputValues) {
    var newPassword = generatePassword();
    //Stores newPassword value to be displayed 
    passwordText.value = newPassword;
    
  } else {
    passwordText.value = "Invalid Values";
  }
  return pwText;
};

// Generate Password based upon prompts function 
function generatePassword() {
  var password = "";
  for (var i = 0; i < charLength; i++) {
    var randomArrayIndex = Math.floor(Math.random() * choiceArray.length);
    password = password + choiceArray[randomArrayIndex];
  }
  return password;
}

function getPrompts() {
  
  choiceArray = [];

  charLength = parseInt(prompt("Input Desired Password Length between 8-128 characters"));

  if (charLength < 8 || charLength > 128) {
    alert("Password lenghth must be a number from 8 to 128. Please Try again!")
  }

  if (confirm("Include lowercase characters in your password?")) {
    choiceArray = choiceArray.concat(lowercaseArray);
  }

  if (confirm("Include uppercase characters in your password?")) {
    choiceArray = choiceArray.concat(uppercaseArray);
  }

  if (confirm("Include numbers in your password?")) {
    choiceArray = choiceArray.concat(numberArray);
  }

  if (confirm("Include special characters in your password?")) {
    choiceArray = choiceArray.concat(specialArray);
  }
  return true;
}

