// Assignment code here

// create random password 
function generatePassword() {
  // asks user for password length
  let passwordLength = prompt("Enter the desired length of the password (8-128 characters):");
  
  // Validate password length
  if (!(passwordLength >= 8 && passwordLength <= 128)) {
    alert("Invalid password length. Please enter a number between 8 and 128.");
    return ""; // keeps box empty if password cant be generated
  }

  // Prompt the user for character types
  let includeLowercase = confirm("Include lowercase letters?");
  let includeUppercase = confirm("Include uppercase letters?");
  let includeNumeric = confirm("Include numbers?");
  let includeSpecial = confirm("Include special characters?");

  // Validate at least one type is selected
  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("Please select at least one character type.");
    return ""; // keeps box empty if password cant be generated
  }

  // Define character pools
  let lowercasePool = "abcdefghijklmnopqrstuvwxyz";
  let uppercasePool = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let numericPool = "0123456789";
  let specialPool = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"


  // Build the character pool based on selected types
  let characterPool = "";
  if (includeLowercase) {
    characterPool += lowercasePool;
  }
  if (includeUppercase) {
    characterPool += uppercasePool;
  }
  if (includeNumeric) {
    characterPool += numericPool;
  }
  if (includeSpecial) {
    characterPool += specialPool;
  }

  // Generate the password
  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    let randomIndex = Math.floor(Math.random() * characterPool.length);
    password += characterPool.charAt(randomIndex);
  }

  // Return the generated password
  return password;
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