// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  let numCharacters = prompt("How many characters would you like your password to contain? (Minimum 8, Maximum 128)");
  let hasSpecialCharacters = confirm("Click OK to confirm including special characters.");
  let hasNumericCharacters = confirm("Click OK to confirm including numeric characters.");
  let hasLowerCaseCharacters = confirm("Click OK to confirm including lowercase characters.");
  let hasUpperCaseCharacters = confirm("Click OK to confirm including uppercase characters.");
  let password = "";
  
  // Constants for the character ranges
  const alphaChars = "abcdefghijklmnopqrstuvwxyz";
  const numericChars = "0123456789";
  const specialChars = " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";

  // Turns the prompt string into a number
  numCharacters = parseInt(numCharacters);

  // Handling for bad inputs
  if (isNaN(numCharacters) || numCharacters === null || numCharacters === undefined) {
    numCharacters = 8;
  }
  if (numCharacters < 8) {
    numCharacters = 8;
  } else if (numCharacters > 128) {
    numCharacters = 128;
  }

  // Sets the increment used in the loop that makes the password string
  let numCriteria = 0;
  if (hasSpecialCharacters) {
    numCriteria++;
  }
  if (hasNumericCharacters) {
    numCriteria++;
  }
  if (hasLowerCaseCharacters) {
    numCriteria++;
  }
  if (hasUpperCaseCharacters) {
    numCriteria++;
  }

  // Forces there to be at least one input criteria
  if (numCriteria === 0) {
    hasLowerCaseCharacters = true;
    numCriteria++;
  }

  // Selects characters to add to password string
  for (let i = 0; i < numCharacters; i = i + numCriteria) {
    if (hasSpecialCharacters) {
      password += specialChars[getRandomInt(specialChars.length)];
    }
    if (hasNumericCharacters) {
      password += numericChars[getRandomInt(numericChars.length)];
    }
    if (hasLowerCaseCharacters) {
      password += alphaChars[getRandomInt(alphaChars.length)];
    }
    if (hasUpperCaseCharacters) {
      password += alphaChars[getRandomInt(alphaChars.length)].toUpperCase();
    }
  }
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Helper function
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}