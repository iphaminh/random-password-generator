// Assignment code here
var numbers = ["1", "2", "3", "4", "5", "6", "7","8","9","10"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialCharacters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
var emArr= [];
var chaLength = 8;
  

function generatePassword() {
  var password = " ";
  
  for (var i = 0; i < chaLength; i++) {
    var randomNum = Math.floor(Math.random() * emArr.length);
}
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var newPrompt = getPrompt();

  if (newPrompt) {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
  // else {
  //   alert("Please select at least one character type");
  // }


function getPrompt() {
  chaLength = parseInt(prompt("How many characters you want to be for the password?"));

    if (isNaN(chaLength) || chaLength < 8 || chaLength > 128) {
      alert("Character length must be number and between 8 and 128 digits");
    }
    if (confirm("Lowercase Letter?")) {
      emArr = emArr.concat(lowerCase);
    }
    if (confirm("Uppercase Letter?")) {
      emArr = emArr.concat(upperCase);
    }
    if (confirm("Numbers?")) {
      emArr = emArr.concat(numbers);
    }
    if (confirm("Special Characters?")) {
      emArr = emArr.concat(specialCharacters);
    }
 
   }
  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



