// Establish strings
var generateBtn = document.querySelector("#generate");
var lCAlpha= "abcdefghijklmnopqrstuvwxyz";
var uCAlpha= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers= "1234567890";
var characters= "!@#$%^&*()";

// Generate password
function generatePassword(){
  var length=prompt("Enter number of characters for password.")
  //if statment making the user input the desired length of password
  if (length < 8 || length > 128 || isNaN(length)) {
    //alert to make a password 8-128 chars
    alert("Please enter a numerical value between 8 and 128.")
    //run function again to reset password instead of having them delete it.
    generatePassword()
  }
  //ask what they want to include in the password
  var lowercase= confirm("Do you want lowercase letters included in password?")
  var uppercase= confirm("Do you want uppercase letters included in password?")
  var numerical= confirm("Do you want numbers included in password?")
  var specialCharacters= confirm("Do you want special characters included in password?")
  //empty string to fill with randomnes
  let passW= "";
  //for loop to run through if statments. 
 for (var i=0; i < length/4; i++) {
  //if statements to randomly select from strings
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
//returns what was randomly generated
return passW
}
 //function to start writing password by setting passord equal to generate password function
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Event listener that activates write password function above
generateBtn.addEventListener("click", writePassword);
