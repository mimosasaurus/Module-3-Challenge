// Assignment Code
var generateBtn = document.querySelector("#generate");
const chars = {
  upperCase : "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowerCase : "abcdefghijklmnopqrstuvwxyz",
  numbers : "1234567890",
  specsym : "!#$%&()*+,-./:;<=>?@[\]^_{|}~"
}


// Write password to the #password input
function writePassword(){
// Gather User Inputs
  var length = window.prompt("How long would you like your password to be? You can pick between 8 and 128 characters");
//Validate Password Length
  if (length < 8 || length > 128){
    window.alert("Error, you entered a number outside the range!")
    writePassword()
  }
  var lower = window.confirm ("Would you like lower case letters?");
  var upper = window.confirm ("Would you like upper case letters?");
  var numbers = window.confirm ("Would you like numbers?");
  var specsym = window.confirm ("Would you like special symbols?");
  
// Collect Requested Character Sets
  var selectedcharset = "";
  if (upper){
    selectedcharset += chars.upperCase;
  }
  if (lower){
    selectedcharset += chars.lowerCase;
  }
  if (numbers){
    selectedcharset += chars.numbers;
  }
  if (specsym){
    selectedcharset += chars.specsym;
  }
  if (selectedcharset.length == 0){
    window.alert ("Error! Please select one option!");
    writePassword();
  } else {
    // Build out password with random characters from selection
    var newpassword = "";
    for (var i = 0; i < length; i++){
      var index = Math.floor(Math.random() * selectedcharset.length)
      var nextchar= selectedcharset[index];
      newpassword += nextchar;
    }
    return newpassword;

  } 
  return false 
}
 //Generate Password
function generatePassword(){
  var passwordText = document.querySelector("#password")
  var password = writePassword()
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click",generatePassword);

