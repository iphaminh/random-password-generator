// Assignment code here
var numbers = 1234567890;
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialCharacters = "!@#$%^&*()_+";
var password = " ";

function generatePassword() {
  var passwordlength = prompt("How many characters you want to be for the password?");
  // Changing the let or var order here or after the first if statement will effect which prompts will pop-up first 
  let includeLowercase = confirm("lower case letters");
  let includeUpercase = confirm("upper case letters");
  let includenumbers = confirm("numbers");
  let includespecial =confirm("special characters");
  
if (passwordlength < 8 || passwordlength > 128) {
  alert("Password must be between 8 and 128 characters");
  return;
}
if (includeLowercase === false && includeUpercase === false && includenumbers === false && includespecial === false) {
  alert("At least one character type must be selected");
  return;
}
}  

// password += numbers[Math.floor(Math.random() * numbers)];
// password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
// password += upperCase[Math.floor(Math.random() * upperCase.length)];
// password += specialCharacters[Math.floor(Math.random() * specialCharacters.length)];

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
