
setTimeout(() => {
  document.querySelector('.loading-bar').style.display = 'none';
}, 10000);


  






// Check if the user has already signed up
document.addEventListener('DOMContentLoaded', function() {
  if (localStorage.getItem('signedUp') === 'true') {
    document.getElementById('signup-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
  }
});

function checkSignup() {
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  
  if (email.includes('@') && password.length >= 8) {

  
  
  
  
  
    // Save signup information in local storage
    localStorage.setItem('signedUp', 'true');
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    
    
    
    
    document.getElementById('signup-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
  } else {
    document.getElementById("error"). innerHTML="Signup successful, login with email and password you use to Signup!";
  }
}

function checkLogin() {
  var loginEmail = document.getElementById('login-email').value;
  var loginPassword = document.getElementById('login-password').value;
  
  var savedEmail = localStorage.getItem('email');
  var savedPassword = localStorage.getItem('password');
  
  if (loginEmail === savedEmail && loginPassword === savedPassword) {
  
  window.location.href="switchmode.html";
    
  
   document.getElementById("correct"). innerHTML="Login Successful ✔️";
    document.getElementById("correctbtn").innerHTML="Please wait...";
    document.getElementById(login-form).style.display="block";
    
    
  } else {
   document.getElementById("error"). innerHTML="Please enter email and password you use to signup!";
  }
}


function  overlay() {
    window.location.href="home.html";
}

function freemode() {
    window.location.href="freemodevideos.html";
}









