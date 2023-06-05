// Assignment code here
var numbers = ["1", "2", "3", "4", "5", "6", "7","8","9","10"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialCharacters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
var emArr= [];
var chaLength = 8;
  

// function generatePassword() {
//   var password = " ";
//   password += numbers[Math.floor(Math.random() * numbers)];
//   password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
//   password += upperCase[Math.floor(Math.random() * upperCase.length)];
//   password += specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
  
//   for (var i = 8; i < passwordLength; i++) {
//     if (passCombination.includes(password[i])) {
//       password += passCombination.floor(Math.random() * passCombination.length)];
//     } else {
//       cpassCombination.push(password[i]);
//     }
  
// }
// }

function getPrompt() {
  var passwordlength = parseInt(prompt("How many characters you want to be for the password?")); //convert the password string into a number/ integer


  let includeLowercase = "lower case letters";   // Changing the let or var order here or after the first if statement will effect which prompts will pop-up first 
  let includeUpercase = "upper case letters";
  let includenumbers = "numbers";
  let includespecial = "special characters";

    if (isNaN(chaLength) || chaLength < 8 || chaLength > 128) {
      alert("Character length must be number and between 8 and 128 digits");
    }
    if (confirm(includeLowercase === false || includeUpercase === false || includenumbers === false || includespecial === false)) {
      alert("At least one character type must be selected");
      
   }
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



