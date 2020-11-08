// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordCriteria = prompt("Would you like uppercase letters?"); 
var passwordCriteria1 = prompt("Would you like lowercase letters?"); 
var passwordCriteria2 = prompt("Would you like numbers?"); 
var passwordCriteria3 = prompt("Would you like special characters (such as ! @ # ?) ]?"); 
var passwordCriteria4 = prompt("For password lenght, please choose between 8-128 characters.")

var availableChoices = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ","abcdefghijklmnopqrstuvwxyz",
, "0123456789", "!@#$%^&*()_+=?"]; 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//create a function called generate password that will build a password in return
  //start with empty choices array or string and empty password
  //do if conditions to build an array or string of character possibilities


//for looping through password criteria 4 lenght and add random character to password
   //for (var i = 0; i < availableChoices.lenght; i++) {  
  //var availableChoices = availableChoices[Math.floor(Math.random() * availableChoices.length)]; 

  //return the password

 // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


