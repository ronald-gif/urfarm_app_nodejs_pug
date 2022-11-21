const validateInputs = (event) => {
    let val = 0;

    const firstname = document.getElementById('firstname');
    const error1 = document.getElementById('error1');
    const secondname = document.getElementById('secondname');
    const error2 = document.getElementById('error2');
    const telephone = document.getElementById('telephone');
    const error3 = document.getElementById('error3');
    const uniquenumber = document.getElementById('uniquenumber');
    const error4 = document.getElementById('error4');
    const password = document.getElementById('password');
    const error5 = document.getElementById('error5');
    const confirmpassword = document.getElementById('confirmpassword');
    const error6 = document.getElementById('error6');
    const role = document.getElementById('role');
    const error7 = document.getElementById('error7');
    const currentdate = document.getElementById('currentdate');
    const error8 = document.getElementById('error8');
    const email = document.getElementById('email');
    const error9 = document.getElementById('error9');


    const firstnameValue = firstname.value.trim();
    const secondnameValue = secondname.value.trim();
    const phonenumberValue = telephone.value.trim();
    const uniquenumbreValue = uniquenumber.value.trim();
    const passwordValue = password.value.trim();
    const confirmpasswordValue = confirmpassword.value.trim();
    const roleValue = role.value;
    const currentdateValue = currentdate.value;
    const emailValue = email.value.trim();

    // function to validate ID
const isValidId = (id) =>{
    // should start with AO and folled by any number from 0 to 9 but less than 3 /^AO-([0-9]{3})+$/;
    // /^CM([0-9]{8})([A-Z]{4})+$/;
    const unregex = /^UF-AO([/])([0-9]{4})+$/;
    return unregex.test(id)
}

    // function to validate phonenumber
const validatePhonenumber = (telephone) =>{
    const number = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    return number.test(telephone)
}

const isValidePassword = (password) =>{
    const passwordExpression =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

    return passwordExpression.test(password);
}

const isValideEmail = (email) =>{
    const emailExpression =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return emailExpression.test(email);
}
    
    
    if(firstnameValue === '') {
        firstname.style.border = '2px solid #ff3860';
        error1.lastElementChild.innerText = 'first name is required';
        val++
     } else {
       firstname.style.border = '2px solid #09c372';
       error1.lastElementChild.innerText = ''
     }
 
     if(secondnameValue === ''){
         secondname.style.border = '2px solid #ff3860';
         error2.lastElementChild.innerText = 'second name is required';
         val++
     }else{
         secondname.style.border = '2px solid #09c372';
        error2.lastElementChild.innerText = ''
     }

     if(phonenumberValue === ''){
        telephone.style.border = '2px solid #ff3860';
        error3.lastElementChild.innerText = 'Phone numberis required';
        val++
    }else if(!validatePhonenumber(phonenumberValue)){
        telephone.style.border = '2px solid #ff3860';
        error3.lastElementChild.innerText = 'Provide a valide phone number';
        val++
    }else{
        telephone.style.border = '2px solid #09c372';
        error3.lastElementChild.innerText = ''
    }

    if(uniquenumbreValue === ''){
        uniquenumber.style.border = '2px solid #ff3860';
        error4.lastElementChild.innerText = 'ID is required';
        val++
    }else if(!isValidId(uniquenumbreValue)){
        uniquenumber.style.border = '2px solid #ff3860';
        error4.lastElementChild.innerText = 'ID must be in this formate UF-AO/0000';
        val++
    }else{
        uniquenumber.style.border = '2px solid #09c372';
        error4.lastElementChild.innerText = '';
    }

    if(passwordValue === ''){
        password.style.border = '2px solid #ff3860';
        error5.lastElementChild.innerText = 'password is required';
        val++
    }else if(!isValidePassword(password.value.trim())){
        error5.lastElementChild.innerText = 'password has to be 8 characters with a number,special character, uppercase and lowercase';
        password.style.border = '2px solid #ff3860';
        val++
    }else{
        error5.lastElementChild.innerText = '';
        password.style.border = '2px solid #09c372';
    }

    if(confirmpasswordValue === ''){
        confirmpassword.style.border = '2px solid #ff3860';
        error6.lastElementChild.innerText = 'confirm your password';
        val++
    }else if(confirmpassword.value.trim() != password.value.trim()){
        error6.lastElementChild.innerText = 'password doesnot match';
        confirmpassword.style.border = '2px solid #ff3860';
        val++
    }else{
        confirmpassword.style.border = '2px solid #09c372'; 
        error6.lastElementChild.innerText = '';
    }

    if(currentdateValue === ''){
        currentdate.style.border = '2px solid #ff3860';
        error8.lastElementChild.innerText = ''
        val++
    }else{
        currentdate.style.border = '2px solid #09c372';
        error8.lastElementChild.innerText = '' 
    }

    if(roleValue === ''){
        role.style.border = '2px solid #ff3860';
        error7.lastElementChild.textContent = 'Select role';
        val++
    }else{
        role.style.border = '2px solid #09c372';
        error7.lastElementChild.textContent = ''
        return true
    }

    if(emailValue === ''){
        email.style.border = '2px solid #ff3860';
        error9.lastElementChild.innerText = 'Email required';
        val++
    }else if(!isValideEmail(emailValue)){
        email.style.border = '2px solid #ff3860';
        error9.lastElementChild.innerText = 'Provide a valide email';
        val++
    }else{
        email.style.border = '2px solid #09c372';
        error9.lastElementChild.innerText = ''
    }

    if(val > 0){
        event.preventDefault()
    }
}