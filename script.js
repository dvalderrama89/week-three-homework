// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  let numCharacters = prompt("How many characters would you like your password to contain?");
  let hasSpecialCharacters = confirm("Click OK to confirm including special characters.");
  let hasNumericCharacters = confirm("Click OK to confirm including numeric characters.");
  let hasLowerCaseCharacters = confirm("Click OK to confirm including lowercase characters.");
  let hasUpperCaseCharacters = confirm("Click OK to confirm including uppercase characters.");
  let password = "";
  
  const alphaChars = "abcdefghijklmnopqrstuvwxyz";
  const numericChars = "0123456789";
  const specialChars = " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";

  password = alphaChars[0] + numericChars[4] + specialChars[2];
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
