// Assignment Code
var generateBtn = document.querySelector("#generate");
var lCAlpha= "abcdefghijklmnopqrstuvwxyz";
var uCAlpha= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers= "1234567890";
var characters= "!@#$%^&*()";

// Write password to the #password input
function generatePassword(){
  var length=prompt("Enter number of characters for password.")
  if (length < 8 || length > 128 || isNaN(length)) {
    alert("Please enter a numerical value between 8 and 128.")
    generatePassword()
  }
  var lowercase= confirm("Do you want lowercase letters included in password?")
  var uppercase= confirm("Do you want uppercase letters included in password?")
  var numerical= confirm("Do you want numbers included in password?")
  var specialCharacters= confirm("Do you want special characters included in password?")
  
  let passW= "";
 for (var i=0; i < length/4; i++) {
  if (lowercase){
    passW+= lCAlpha[Math.floor(Math.random() * lCAlpha.length)]
  }if (uppercase){
    passW+= uCAlpha[Math.floor(Math.random() * uCAlpha.length)]
  }if (numerical){
    passW += numbers[Math.floor(Math.random() * numbers.length)]
  }if (specialCharacters){
    passW += characters[Math.floor(Math.random() * characters.length)]
  }
}
return passW
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
