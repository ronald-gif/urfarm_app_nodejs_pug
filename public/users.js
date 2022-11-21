const validateInputs = (event) => {
    let initial = 0

const fullname = document.getElementById('fullname');
const error1 = document.getElementById('error1')
const email = document.getElementById('email');
const error2 = document.getElementById('error2')
const telephone = document.getElementById('telephone');
const error3 = document.getElementById('error3')
const uniquenumber = document.getElementById('uniquenumber');
const error6 = document.getElementById('error6')
const password = document.getElementById('password')
const error4 = document.getElementById('error4');
const confirmpassword = document.getElementById('confirmpassword');
const error5 = document.getElementById('error5');
const role = document.getElementById('role')
const error7 = document.getElementById('error7');


    const fullnameValue = fullname.value.trim();
    const phonenumberValue = telephone.value.trim();
    const uniquenumbreValue = uniquenumber.value.trim();
    const passwordValue = password.value.trim();
    const confirmpasswordValue = confirmpassword.value.trim();
    const roleValue = role.value;
    const emailValue = email.value.trim()
    

    // function to validate phonenumber
const validatePhonenumber = (telephone) =>{
    const number = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    return number.test(telephone)
}

// function to validate ID
const isValidId = (id) =>{
    // should start with AO and folled by any number from 0 to 9 but less than 3 /^AO-([0-9]{3})+$/;
    // /^CM([0-9]{8})([A-Z]{4})+$/;
    const unregex = /^UF-C([/])([0-9]{4})+$/;
    return unregex.test(id)
}


const isValidePassword = (password) =>{
    const passwordExpression =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

    return passwordExpression.test(password);
}

const isValideEmail = (email) =>{
    const emailExpression =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return emailExpression.test(email);
}
    
    if(fullnameValue === '') {
        fullname.style.border = '2px solid #ff3860';
        error1.lastElementChild.innerText = 'Name is required'
        initial++
     } else {
       fullname.style.border = '2px solid #09c372';
       error1.lastElementChild.innerText = '' 
     }

     if(emailValue === ''){
        email.style.border = '2px solid #ff3860';
        error2.lastElementChild.innerText = 'Email required'
        initial++
    }else if(!isValideEmail(emailValue)){
        email.style.border = '2px solid #ff3860';
        error2.lastElementChild.innerText = 'Provide a valide email';
        initial++
    }else{
        email.style.border = '2px solid #09c372';
        error2.lastElementChild.innerText = ''
    }

     if(phonenumberValue === ''){
        telephone.style.border = '2px solid #ff3860';
        error3.lastElementChild.innerText = 'Phone numberis required';
        initial++
    }else if(!validatePhonenumber(phonenumberValue)){
        telephone.style.border = '2px solid #ff3860';
        error3.lastElementChild.innerText = 'Provide a valide phone number';
        initial++
    }else{
        telephone.style.border = '2px solid #09c372';
        error3.lastElementChild.innerText = ''
    }

    if(passwordValue === ''){
        password.style.border = '2px solid #ff3860';
        error4.lastElementChild.innerText = 'password is required';
        initial++
    }else if(!isValidePassword(password.value.trim())){
        error4.lastElementChild.innerText = 'password has to be 8 characters with a number,special character, uppercase and lowercase';
        password.style.border = '2px solid #ff3860';
        initial++
    }else{
        error4.lastElementChild.innerText = '';
        password.style.border = '2px solid #09c372';
    }

    if(confirmpasswordValue === ''){
        confirmpassword.style.border = '2px solid #ff3860';
        error5.lastElementChild.innerText = 'confirm your password';
        initial++
    }else if(confirmpassword.value.trim() != password.value.trim()){
        error5.lastElementChild.innerText = 'password doesnot match';
        confirmpassword.style.border = '2px solid #ff3860';
        initial++
    }else{
        confirmpassword.style.border = '2px solid #09c372'; 
        error5.lastElementChild.innerText = '';
    }

    if(uniquenumbreValue === ''){
        uniquenumber.style.border = '2px solid #ff3860';
        error6.lastElementChild.innerText = 'ID is required';
        initial++
    }else if(!isValidId(uniquenumbreValue)){
        uniquenumber.style.border = '2px solid #ff3860';
        error6.lastElementChild.innerText = 'ID must be in this formate UF-AO/0000';
        initial++
    }else{
        uniquenumber.style.border = '2px solid #09c372';
        error6.lastElementChild.innerText = '';
    }

    if(roleValue === ''){
        role.style.border = '2px solid #ff3860';
        error7.lastElementChild.textContent = 'Select role';
        initial++
    }else{
        role.style.border = '2px solid #09c372';
        error7.lastElementChild.textContent = ''
        return true
    }

    if(initial > 0){
        event.preventDefault()
    }
}
