var form = document.getElementById('form')

var email = sessionStorage.getItem('toPass')
if (email !== null) {
  document.getElementById('email').defaultValue = email;
  sessionStorage.removeItem('toPass');
}

var username = document.getElementById('name')
var dob = document.getElementById('dob')
var male = document.getElementById('male')
var female = document.getElementById('female')
var password = document.getElementById('password')
var confpassword = document.getElementById('confpassword')
var agreement = document.getElementById('agreement')


function checkInput() {
  var emailInput = document.getElementById('email');

  if (emailInput === null) {
    console.error('Email input field not found in the DOM.');
    return;
  }

  if (emailInput.value === '' || !emailInput.value.endsWith('@gmail.com')) {
    alert('Email must end with @gmail.com');
  } else if (username.value === '') {
    alert('Name cannot be empty');
  } else if (!male.checked && !female.checked) {
    alert('Gender must be selected');
  } else if (password.value === '' || !checkAlphaNum(password.value)) {
    alert('Password cannot be empty and must be alphanumeric');
  } else if (confpassword.value !== password.value) {
    alert('Password doesn\'t match');
  } else if (!agreement.checked) {
    alert('Agreement box must be checked!');
  } else {
    confirm('Registration Success!');
    window.location.href = "movies.html";
  }
}


function checkAlphaNum(password){
  var isNum = false
  var isAlpha = false

  for(var i = 0; i < password.length; i++){
      if(isNaN(password[i])){
          isAlpha = true
      }else{
          isNum = true
      }

      if(isAlpha && isNum){
          return true
      }
  }

  return false
}