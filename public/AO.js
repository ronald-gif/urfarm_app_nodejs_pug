const form = document.getElementById('FormToRegister');
const firstname = document.getElementById('firstname');
const error1 = document.getElementById('error1')
const secondname = document.getElementById('secondname');
const error2 = document.getElementById('error2')
const telephone = document.getElementById('telephone');
const error3 = document.getElementById('error3')
const uniquenumber = document.getElementById('uniquenumber');
const error4 = document.getElementById('error4')
const password = document.getElementById('password')
const error5 = document.getElementById('error5');
const confirmpassword = document.getElementById('confirmpassword');
const error6 = document.getElementById('error6');
const role = document.getElementById('role')
const error7 = document.getElementById('error7')
const currentdate = document.getElementById('currentdate');
const error8 = document.getElementById('error8');
const dateofbirth = document.getElementById('DOB');
const error9 = document.getElementById('error9')


form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

// function to validate phonenumber
const validatePhonenumber = (telephone) =>{
    const number = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    return number.test(telephone)
}

// function to validate ID
const isValidId = (id) =>{
    // should start with AO and folled by any number from 0 to 9 but less than 3 /^AO-([0-9]{3})+$/;
    // /^CM([0-9]{8})([A-Z]{4})+$/;
    const unregex = /^UF-AO([/])([0-9]{4})+$/;
    return unregex.test(id)
}


const isValidePassword = (password) =>{
    const passwordExpression =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

    return passwordExpression.test(password);
}

const validateInputs = () => {
    const firstnameValue = firstname.value.trim();
    const secondnameValue = secondname.value.trim();
    const phonenumberValue = telephone.value.trim();
    const uniquenumbreValue = uniquenumber.value.trim();
    const passwordValue = password.value.trim();
    const confirmpasswordValue = confirmpassword.value.trim();
    const dateofbirthValue = dateofbirth.value;
    const currentdateValue = currentdate.value;
    
}