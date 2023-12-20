// Array of special characters to be included in password
var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Array of uppercase characters to be included in password
var upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// Function to prompt user for password options
function getPasswordOptions() {
  // Get password length from the user
  var length = parseInt(prompt('How long would you like your password to be? (8-128 characters)'));

  // Check if the length is valid
  while (isNaN(length) || length < 8 || length > 128) {
    length = parseInt(prompt('Please enter a valid length (8-128 characters)'));
  }

  // Get character type choices from the user
  var includeLower = confirm('Do you want to include lowercase letters?');
  var includeUpper = confirm('Do you want to include uppercase letters?');
  var includeNumeric = confirm('Do you want to include numbers?');
  var includeSpecial = confirm('Do you want to include special characters?');

  // Check if at least one character type is selected
  while (!(includeLower || includeUpper || includeNumeric || includeSpecial)) {
    alert('You must select at least one character type!');
    includeLower = confirm('Do you want to include lowercase letters?');
    includeUpper = confirm('Do you want to include uppercase letters?');
    includeNumeric = confirm('Do you want to include numbers?');
    includeSpecial = confirm('Do you want to include special characters?');
  }

  // Return user choices
  return {
    length: length,
    includeLower: includeLower,
    includeUpper: includeUpper,
    includeNumeric: includeNumeric,
    includeSpecial: includeSpecial
  };
}

// Function for getting a random element from an array
function getRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  var randomElement = arr[randomIndex];
  return randomElement;
}

// Function to generate password with user input
function generatePassword() {
  var options = getPasswordOptions();

  // Initialize the character pool based on user choices
  var characterPool = [];
  if (options.includeLower) characterPool = characterPool.concat(lowerCasedCharacters);
  if (options.includeUpper) characterPool = characterPool.concat(upperCasedCharacters);
  if (options.includeNumeric) characterPool = characterPool.concat(numericCharacters);
  if (options.includeSpecial) characterPool = characterPool.concat(specialCharacters);

  // Generate the password
  var generatedPassword = '';
  for (var i = 0; i < options.length; i++) {
    var randomChar = getRandom(characterPool);
    generatedPassword += randomChar;
  }

  return generatedPassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
