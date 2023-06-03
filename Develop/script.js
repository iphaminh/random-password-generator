// Assignment code here
var numbers = 1234567890;
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialCharacters = "!@#$%^&*()_+";
var password = "";

function generatePassword() {
  var passwordlength = prompt("How many characters you want to be for the password?");
if (thelength < 8 && thelength > 128) {
  alert("thepassword length is from 8 to 128 characters");
  
  console.log(passwordlength);
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
