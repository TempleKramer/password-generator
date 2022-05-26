var lowercase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "w",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var uppercase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "",
];
var special = ["!", "@", "#", "$", "&", "*"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var password = [];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Assignment code here

function generatePassword() {
  console.log("hi!");

  
  var userOptions = [];

  characterLength = prompt(
    "How many characters long would you like your password to be? \nMinimum: 8 Digits \nMaximum: 128 digits"
  );
  console.log(characterLength);

  if (characterLength > 7 && characterLength < 129) {
  } else {
    return "Please choose password length between 8 and 128 digits! ";
  }

  var confirmLowerCase = confirm(
    "Do you want lowercase letters as a part of your password?"
  );

  if (confirmLowerCase) {
    userOptions.push(lowercase);
    console.log(userOptions);
  }

  var confirmUpperCase = confirm(
    "Do you want uppercase letters as a part of your password?"
  );
  if (confirmUpperCase) {
    userOptions.push(uppercase);
    console.log(userOptions);
  }

  var confirmNumbers = confirm(
    "Do you want numbers as a part of your password?"
  );
  if (confirmNumbers) {
    userOptions.push(numbers);
    console.log(userOptions);
  }
  var confirmSpecialCharacters = confirm(
    "Do you want special characters as a part of your password?"
  );
  if (confirmSpecialCharacters) {
    userOptions.push(special);
    console.log(userOptions);
  }

  userOptions = userOptions.flat();

  for (let i = 0; i < characterLength; i++) {
    randomCharacter =
      userOptions[Math.floor(Math.random() * userOptions.length)];
    password.push(randomCharacter);
  }

  return password.join("");
}


var generateBtn = document.querySelector("#generate");


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


generateBtn.addEventListener("click", writePassword);
