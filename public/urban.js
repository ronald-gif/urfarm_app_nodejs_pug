const validateInputs = (event) => {
    let val = 0;

const firstname = document.getElementById('firstname');
const error1 = document.getElementById('error1')
const secondname = document.getElementById('secondname');
const error2 = document.getElementById('error2')
const telephone = document.getElementById('telephone');
const error3 = document.getElementById('error3');
const currentdate = document.getElementById('currentdate');
const error4 = document.getElementById('error4');
const password = document.getElementById('password')
const error5 = document.getElementById('error5');
const confirmpassword = document.getElementById('confirmpassword');
const error6 = document.getElementById('error6');
const nin = document.getElementById('nin');
const error7 = document.getElementById('error7');
const dateofbirth = document.getElementById('DOB');
const error8 = document.getElementById('error8')
const uniquenumber = document.getElementById('uniquenumber');
const error9 = document.getElementById('error9')
const gender = document.getElementById('gender');
const error10 = document.getElementById('error10');
const myward = document.getElementById('myward');
const error11 = document.getElementById('error11');
const role = document.getElementById('role')
const error12 = document.getElementById('error12')
const activities = document.getElementById('activities');
const error13 = document.getElementById('error13');
const email = document.getElementById('email');
const error14 = document.getElementById('error14');


    const secondnameValue = secondname.value.trim();
    const phonenumberValue = telephone.value.trim();
    const uniquenumbreValue = uniquenumber.value.trim();
    const passwordValue = password.value.trim();
    const confirmpasswordValue = confirmpassword.value.trim();
    const roleValue = role.value;
    const currentdateValue = currentdate.value;
    const dateofbirthValue = dateofbirth.value;
    const ninValue = nin.value.trim();
    const emailValue = email.value.trim();
    let valid = false;


    // function to validate phonenumber
const validatePhonenumber = (telephone) =>{
    const number = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    return number.test(telephone)
}

// function to validate ID
const isValidId = (id) =>{
    // should start with AO and folled by any number from 0 to 9 but less than 3 /^AO-([0-9]{3})+$/;
    // /^CM([0-9]{8})([A-Z]{4})+$/;
    const unregex = /^UF-UF([/])([0-9]{4})+$/;
    return unregex.test(id)
}


const isValideEmail = (email) =>{
    const emailExpression =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return emailExpression.test(email);
}

const isValidePassword = (password) =>{
    const passwordExpression =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

    return passwordExpression.test(password);
}

// function to validate  NIN 
const isValidNin = (nin) =>{
    // should start with AO and folled by any number from 0 to 9 but less than 3 /^AO-([0-9]{3})+$/;
    // /^CM([0-9]{8})([A-Z]{4})+$/;
    const ninNumber = /^CM([0-9]{7})([A-Z]{4})+$/;
    return ninNumber.test(nin)
}
    
    if(firstname.value.trim() === '') {
        firstname.style.border = '2px solid #ff3860';
        error1.lastElementChild.innerText = 'first name is required'
        val++
     } else {
       firstname.style.border = '2px solid #09c372';
       error1.lastElementChild.innerText = ''  
     }
 
     if(secondnameValue === ''){
         secondname.style.border = '2px solid #ff3860';
         error2.lastElementChild.innerText = 'second name is required'
         val++
     }else{
         secondname.style.border = '2px solid #09c372';
        error2.lastElementChild.innerText = ''
     }

     if(phonenumberValue === ''){
        telephone.style.border = '2px solid #ff3860';
        error3.lastElementChild.innerText = 'Phone numberis required'
        val++
    }else if(!validatePhonenumber(phonenumberValue)){
        telephone.style.border = '2px solid #ff3860';
        error3.lastElementChild.innerText = 'Provide a valide phone number'
        val++
    }else{
        telephone.style.border = '2px solid #09c372';
        error3.lastElementChild.innerText = ''
    }

    if(currentdateValue === ''){
        currentdate.style.border = '2px solid #ff3860';
        error4.lastElementChild.innerText = ''
        val++
    }else{
        currentdate.style.border = '2px solid #09c372';
        error4.lastElementChild.innerText = '' 
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

    if(ninValue === ''){
        nin.style.border = '2px solid #ff3860';
        error7.lastElementChild.innerText = 'NIN is required';
        val++
    }else if(!isValidNin(ninValue)){
        nin.style.border = '2px solid #ff3860';
        error7.lastElementChild.innerText = 'Enter valid NIN number';
        val++
    }else{
        nin.style.border = '2px solid #09c372';
        error7.lastElementChild.innerText = '';
    }

    if(dateofbirthValue === ''){
        dateofbirth.style.border = '2px solid #ff3860';
        error8.lastElementChild.innerText = ''
        val++
    }else{
        dateofbirth.style.border = '2px solid #09c372';
        error8.lastElementChild.innerText = '' 
    }

    if(uniquenumbreValue === ''){
        uniquenumber.style.border = '2px solid #ff3860';
        error9.lastElementChild.innerText = 'ID is required';
        val++
    }else if(!isValidId(uniquenumbreValue)){
        uniquenumber.style.border = '2px solid #ff3860';
        error9.lastElementChild.innerText = 'ID must be in this formate UF-UF/0000';
        val++
    }else{
        uniquenumber.style.border = '2px solid #09c372';
        error9.lastElementChild.innerText = '';
    }

    if(gender.value === ''){
        gender.style.border = '2px solid #ff3860';
        error10.lastElementChild.innerText = 'Select gender'; 
        val++
    }else{
        gender.style.border = '2px solid #09c372';
        error10.lastElementChild.innerText = '';  
    }

    if(myward.value === ''){
        myward.style.border = '2px solid #ff3860';
        error11.lastElementChild.innerText = 'Select LC/Ward'; 
        val++
    }else{
        myward.style.border = '2px solid #09c372';
        error11.lastElementChild.innerText = '';   
    }

    if(roleValue === ''){
        role.style.border = '2px solid #ff3860';
        error12.lastElementChild.textContent = 'Select role'
        val++
    }else{
        role.style.border = '2px solid #09c372';
        error12.lastElementChild.textContent = ''
        return true
    }

    if(activities.value === ''){
        activities.style.border = '2px solid #ff3860';
        error13.lastElementChild.innerText = 'Select Activity'; 
        val++
    }else{
        activities.style.border = '2px solid #09c372';
        error13.lastElementChild.innerText = '';   
    }

    if(emailValue === ''){
        email.style.border = '2px solid #ff3860';
        error14.lastElementChild.innerText = 'Email required'
        val++
    }else if(!isValideEmail(emailValue)){
        email.style.border = '2px solid #ff3860';
        error14.lastElementChild.innerText = 'Provide a valide email'
        val++
    }else{
        email.style.border = '2px solid #09c372';
        error14.lastElementChild.innerText = ''
    }

    if(val > 0){
        event.preventDefault()
    }
}