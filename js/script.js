 import { Service } from "./service.js";
document.getElementById('registerForm').addEventListener('submit', (eventValue) => {
    eventValue.preventDefault();


    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const uname = document.getElementById('uname');
    const uemail = document.getElementById('uemail');
    const upassword = document.getElementById('upassword');
 
    
    if (name === "") {
        uname.innerHTML = 'Input your name';
        return;
    }
    else {
        uname.innerHTML = '';
    }

    if (email === "") {
        uemail.innerHTML = 'Input your email';
        return;
    } else {
        uemail.innerHTML = '';
    }

     if(Service.getUser(email)){
        
        uemail.innerHTML = 'Another user already exist with this email address';
        return;
    }
    else {
        uemail.innerHTML = '';
    }

    if (password === "") {
        upassword.innerHTML = 'Input your password';
        return;
    }
    else {
        upassword.innerHTML = '';
    }


       
    const userInput = {name, email, password};
    // const userInput = {name: name, email:email, password:password};
    Service.storeUser(userInput)
    
    window.location.href = "/login.html";

})