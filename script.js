// Assignment code here
var numbers = ["1", "2", "3", "4", "5", "6", "7","8","9","10"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialCharacters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

var chaLength = 8; // initial length of the password
var emArr = []; 
  

function generatePassword() {
  var password = " "; //empty string to store the password when click to the generate password button
  
  for (var i = 0; i < chaLength; i++) { //chaLength link/ connect to the prompt() function to decide how many characters the user wants to generate
    var randomNum = Math.floor(Math.random() * emArr.length); 
    password += emArr[randomNum];
  }
  
  return password;
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var newPrompt = getPrompt();
  var passwordText = document.querySelector("#password");

  if (newPrompt) {
  var oldPassword = generatePassword();

  passwordText.value = oldPassword;

  }
}

function getPrompt() {
  chaLength = parseInt(prompt("How many characters you want to be for the password?")); //function that converts a string into an integer. When the prompt function is used, it temporarily stops the execution of the script and waits for the user to respond. Cool !!
//if the user inputs "43" in the prompt, parseInt will convert "43" to 43 (from a string to a number), and then chaLength will be assigned the value 43.
    if (isNaN(chaLength) || chaLength < 8 || chaLength > 128) { //isNaN(value) If the given value is NaN, it returns true. If the value is a number, it returns false.
      alert("Character length must be number and between 8 and 128 digits");
      return false; //it will stop the function from running
    }
// if the user click yes in one of those prompts, it will return true. If the user click no, it will return false.
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
    if (emArr.length === 0) {
      alert("Please select at least one character type");
      return false; //it will stop the function from running
    }
    return true;
  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

