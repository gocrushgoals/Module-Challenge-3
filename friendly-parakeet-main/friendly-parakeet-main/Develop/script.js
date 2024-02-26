// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("Generate Password Button Clicked")

  // 1. prompt the user for the password criteria 
  //   a. Password length 8 < 128
  //   b. choose to include lowercase, uppercase, numeric, and/or special characters
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
