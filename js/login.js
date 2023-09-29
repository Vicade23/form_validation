import { Service } from './service.js';
  
document.getElementById("loginForm").addEventListener("submit", (e) => {
    e.preventDefault(); 

   
    // input varRep
    const email = document.getElementById('email');
    const password = document.getElementById('password');
 
 
    if (email.value === '') {
        document.getElementById('email2Error').innerHTML = 'Input your email';
    }
    else {
        document.getElementById('email2Error').innerHTML = '';
    }

    if (password.value === '') {
        document.getElementById('password2Error').innerHTML = 'Input your passcode';
    }
    else {
        document.getElementById('password2Error').innerHTML = '';
    }
    const localData = Service.getUserByEmailPassword(email.value, password.value);
    console.log("localData", localData);
    
    if(localData){
        alert("Login succesful")
       window.location.href = "/hoodie.html"
    }else{
        alert("User not found or incorrect password")
    }
    

})