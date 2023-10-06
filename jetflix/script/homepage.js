var email = document.getElementById('email')

function checkInput(){
  if(email.value == '' || !email.value.endsWith('@gmail.com')){
    alert('Email must ends with @gmail.com')
  }else{
    alert('Moving to next page')
    sessionStorage.setItem("toPass", email.value)
    window.location.href = "sign-up.html"
  }
}