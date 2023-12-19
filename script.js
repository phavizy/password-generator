// Array of special characters to be included in password
const specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
const numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];



// Array of lowercase characters to be included in password
const lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
const upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

//Global variable so it can easily be accessed
  var password =''
  var length=12;

// Function to prompt user for password options
function getPasswordOptions() {
  var op1 = prompt('Do you want uppercase?[y/n]')
  var op2 = prompt('Do you want lowercase?[y/n]')
  var op3 = prompt('Do you want special characters[y/n]')

  getRandom(op1,op2,op3)
            
            

}
var passet = [];

// Function for getting a random element from an array
function getRandom(a,b,c) {

opt1=a
opt2=b
opt3=c

if(opt1==="y"&&opt2==="y"&&opt3==="y"){
passet = passet.concat(specialCharacters)
passet = passet.concat(lowerCasedCharacters)
passet = passet.concat(specialCharacters)
}else if(opt1==="y"&&opt2==="y"&&opt3==="n"){
passet = passet.concat(specialCharacters)
passet = passet.concat(lowerCasedCharacters)
}else if(opt1==="y"&&opt2==="n"&&opt3==="n"){
passet = passet.concat(specialCharacters)
}else if(opt1==="n"&&opt2==="y"&&opt3==="n"){
passet = passet.concat(lowerCasedCharacters)
}else if(opt1==="n"&&opt2==="y"&&opt3==="y"){
passet = passet.concat(lowerCasedCharacters)
passet = passet.concat(specialCharacters)
}else if(opt1==="y"&&opt2==="n"&&opt3==="y"){
passet = passet.concat(specialCharacters)
passet = passet.concat(specialCharacters)
}else if(opt1==="n"&&opt2==="n"&&opt3==="y"){
passet = passet.concat(specialCharacters)
}else if(opt1==="n"&&opt2==="n"&&opt3==="n"){
alert('You can\'t create a password ')
}else{
  alert('You entered the wrong value')
}

}

// Function to generate password with user input
function generatePassword() {
  getPasswordOptions()

  for (let i = 0; i < length; i++) {
                const randomIndex = Math.floor(Math.random() * passet.length);
                password += passet[randomIndex];
            }
return password

}

// Get references to the #generate element
const generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);