// Assignment code here
var generateBtn = document.querySelector("#generate");

 function generatePassword() {
  var passwordLength = getPasswordLength();
  var selectedArray = [];

  //  The array the password is generated in
  var passwordArray = [];

  //  Each set of characters have their own unique array.  
  var numericArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specialArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "?", "/", "-", ":", ";", "[", "]", "{", "}", ".", "<", ">", "=", "_", "`", "|", "~"];
  var lowerArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var capitalArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  
  var lowerCase = confirm ("Would you like your password to contain lowercase letters in it?");
  var upperCase = confirm ("Would you like your password to contain uppercase letters in it?");
  var numbers = confirm ("Would you like your password to contain numbers in it?");
  var characters = confirm ("Would you like your password to contain special characters (!,@,#,etc) in it?");

  //  If statements for the array. Decides which array of characters 
  if (lowerCase) {
    selectedArray = selectedArray.concat(lowerArray);
  }
  if (upperCase) {
    selectedArray = selectedArray.concat(capitalArray);
  }
  if (numbers) {
    selectedArray = selectedArray.concat(numericArray);
  }
  if (characters) {
    selectedArray = selectedArray.concat(specialArray);
  }

  // This loops takes the selected array, select random data, and then start to form a password
  for (var i = 0; i < passwordLength; i++) {
    passwordArray = passwordArray + selectedArray[Math.floor(Math.random() * (selectedArray.length))];
  }

  return passwordArray;
}
//  Setting the lenghth of the generated password
function getPasswordLength() {
  var clientsNumber = (prompt("Please enter a number between 8 and 128"));
  if (clientsNumber < 8 || clientsNumber > 128) {
    alert("Invalid length of " + clientsNumber + " . Please enter a number between 8 - 128")
    generatePassword();
  } 
  return clientsNumber;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

