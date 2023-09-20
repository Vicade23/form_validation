
document.getElementById("form").addEventListener("submit", (eventValue) => {
    //prevent default form redirect on submit state
    eventValue.preventDefault();
   
    //get form elements by loop
    for(i = 0; i<3; i++){ 
        console.log("sumitForm", eventValue.target[1].value ) 
    }

    // access the form input element
    const uname = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // validation to make sure the fields are not empty 
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");

    if(uname === ""){
        nameError.innerHTML = "Name field can not be empty"
    } else{ 
        nameError.innerHTML = ""   
    }  
    
    if(email === ""){
        emailError.innerHTML = "Email field can not be empty" 
    } else{ 
        emailError.innerHTML = ""   
    } 
    
    if(password === ""){
        passwordError.innerHTML = "Password field can not be empty" 
    }else{ 
        passwordError.innerHTML = ""   
    }

    if(uname !== "" && email !== "" &&  password !== "" ){
      // you can now store the user data at this point
        console.log("Submitted values", {name, email, password})
    }
})

 