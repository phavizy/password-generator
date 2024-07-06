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
  var length=0;

// Function to prompt user for password options
function getPasswordOptions() {
  var op1 = prompt('Do you want uppercase?[y/n]')
  var op2 = prompt('Do you want lowercase?[y/n]')
  var op3 = prompt('Do you want special characters[y/n]')
  var op4 = prompt('Do you want numbers [y/n]')
  length= prompt('What is the password length (at least 8-125)')

  if(length < 8 ||length>125){
    alert('password length is either lower than 8 or higher than 125')
    getPasswordOptions()
  }

  getRandom(op1,op2,op3,op4)
            
            

}
var passet = [];

function collector(){

  password =''
  for (let i = 0; i < length; i++) {
                const randomIndex = Math.floor(Math.random() * passet.length);
                password += passet[randomIndex];
            }
}

// Function for getting a random element from an array
function getRandom(a,b,c,d) {

opt1=a
opt2=b
opt3=c
opt4=d

if(opt1==="y"&&opt2==="y"&&opt3==="y"&&opt4==="y"){
passet = passet.concat(upperCasedCharacters)
passet = passet.concat(lowerCasedCharacters)
passet = passet.concat(specialCharacters)
passet = passet.concat(numericCharacters)
collector()
}else if(opt1==="y"&&opt2==="y"&&opt3==="n"&&opt4==='y'){
passet = passet.concat(upperCasedCharacters)
passet = passet.concat(lowerCasedCharacters)
collector()
}else if(opt1==="y"&&opt2==="n"&&opt3==="n"&&opt4==='y'){
passet = passet.concat(specialCharacters)
collector()
}else if(opt1==="n"&&opt2==="y"&&opt3==="n"){
passet = passet.concat(lowerCasedCharacters)
collector()
}else if(opt1==="n"&&opt2==="y"&&opt3==="y"){
passet = passet.concat(lowerCasedCharacters)
passet = passet.concat(specialCharacters)
collector()
}else if(opt1==="y"&&opt2==="n"&&opt3==="y"){
passet = passet.concat(upperCasedCharacters)
passet = passet.concat(specialCharacters)
collector()
}else if(opt1==="n"&&opt2==="n"&&opt3==="y"){
passet = passet.concat(specialCharacters)
collector()
}else if(opt1==="n"&&opt2==="n"&&opt3==="n"){
alert('You can\'t create a password ')
password ='Unable to Generate password'
}else{
  alert('You entered the wrong value')
  password ='Unable to Generate password'

}

}



// Function to generate password with user input
function generatePassword() {
  getPasswordOptions()

  
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