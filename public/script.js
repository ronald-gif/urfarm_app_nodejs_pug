// const form = document.getElementById('myFormToRegister');
// const firstname = document.getElementById('firstName');
// const error1 = document.getElementById('error1')
// const secondname = document.getElementById('secondname');
// const error2 = document.getElementById('error2')
// const telephone = document.getElementById('telephone');
// const error3 = document.getElementById('error3')
// const uniquenumber = document.getElementById('uniquenumber');
// const error7 = document.getElementById('error7')
// const dateofbirth = document.getElementById('DOB');
// const error6 = document.getElementById('error6')
// const currentdate = document.getElementById('currentdate');
// const error5 = document.getElementById('error5');
// const nin = document.getElementById('nin');
// // const error8 = document.getElementById('error8');
// // const location = document.getElementById('location');
// const error9 = document.getElementById('error9')
// const password = document.getElementById('password')
// const error11 = document.getElementById('error11');
// const confirmpassword = document.getElementById('confirmpassword');
// const error12 = document.getElementById('error12');
// const directiontohome = document.getElementById('directiontohome');
// const error13 = document.getElementById('error13')
// const yearsspent = document.getElementById('yearsspent');
// const error14 = document.getElementById('error14');
// const residence = document.getElementById('residence');
// const error10 = document.getElementById('error10');
// const gender = document.getElementById('gender');
// const error15 = document.getElementById('error15');
// const myward = document.getElementById('myward');
// const error16 = document.getElementById('error16');
// const horticulture = document.getElementById('horticulture');
// const dairy = document.getElementById( 'dairy');
// const poultry = document.getElementById('poultry');
// const error17 = document.getElementById('error17')

// const unregex = /^AO-([0-9]{3})+$/;

// form.addEventListener('submit', e => {
//     e.preventDefault();

//     validateInputs();
// });

// // function to validate phonenumber
// const validatePhonenumber = (telephone) =>{
//     const number = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

//     return number.test(telephone)
// }

// // function to validate ID
// const isValidId = (id) =>{
//     const uniqueId = "^([a-zA-Z_$][a-zA-Z\\d_$]*)$";
//     return uniqueId.test(id)
// }

// const isValidePassword = (password) =>{
//     const passwordExpression =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

//     return passwordExpression.test(password);
// }

// const validateInputs = () => {
//     const firstnameValue = firstname.value.trim();
//     const secondnameValue = secondname.value.trim();
//     const phonenumberValue = telephone.value.trim();
//     const uniquenumbreValue = uniquenumber.value.trim();
//     const dateofbirthValue = dateofbirth.value;
//     const currentdateValue = currentdate.value;
//     const ninValue = nin.value.trim();
//     let valid = false;
  

//     if(firstnameValue === '') {
//        firstname.style.border = '2px solid #ff3860';
//        error1.lastElementChild.innerText = 'first name is required'
      
//     } else {
//       firstname.style.border = '2px solid #09c372';
//       error1.lastElementChild.innerText = ''
      
//     }

//     if(secondnameValue === ''){
//         secondname.style.border = '2px solid #ff3860';
//         error2.lastElementChild.innerText = 'second name is required'
//     }else{
//         secondname.style.border = '2px solid #09c372';
//        error2.lastElementChild.innerText = ''
//     }

//     if(phonenumberValue === ''){
//         telephone.style.border = '2px solid #ff3860';
//         error3.lastElementChild.innerText = 'Phone numberis required'
//     }else if(!validatePhonenumber(phonenumberValue)){
//         telephone.style.border = '2px solid #ff3860';
//         error3.lastElementChild.innerText = 'Provide a valide phone number'
//     }else{
//         telephone.style.border = '2px solid #09c372';
//         error3.lastElementChild.innerText = ''
//     }

//     if(dateofbirthValue === ''){
//         dateofbirth.style.border = '2px solid #ff3860';
//         error6.lastElementChild.innerText = ''
//     }else{
//         dateofbirth.style.border = '2px solid #09c372';
//         error6.lastElementChild.innerText = '' 
//     }

//     if(currentdateValue === ''){
//         currentdate.style.border = '2px solid #ff3860';
//         error5.lastElementChild.innerText = ''
//     }else{
//         currentdate.style.border = '2px solid #09c372';
//         error5.lastElementChild.innerText = '' 
//     }

//     // if(uniquenumbreValue === ''){
//     //     uniquenumber.style.border = '2px solid #ff3860';
//     //     error7.lastElementChild.innerText = 'ID is required';
//     // // }else if(!isValidId(uniquenumbreValue)){
//     //     // uniquenumber.style.border = '2px solid #ff3860';
//     //     // error7.lastElementChild.innerText = 'enter valid ID';
//     // } else if(uniquenumbreValue != 5){
//     //     uniquenumber.style.border = '2px solid #ff3860';
//     //     error7.lastElementChild.innerText = 'ID has to be 5 characters'; 
//     // }
//     // else{
//     //     uniquenumber.style.border = '2px solid #09c372';
//     //     error7.lastElementChild.innerText = '';
//     // }

//     if(ninValue === ''){
//         nin.style.border = '2px solid #ff3860';
//         error8.lastElementChild.innerText = 'NIN is required';
//     }else if(ninValue.length() != 11){
//         nin.style.border = '2px solid #ff3860';
//         error8.lastElementChild.innerText = 'NIN has to be 11 characters';
//     }else{
//         nin.style.border = '2px solid #09c372';
//         error8.lastElementChild.innerText = '';
//     }

//     if(password.value.trim() === ''){
//         password.style.border = '2px solid #ff3860';
//         error11.lastElementChild.innerText = 'password is required';
//     }else if(!isValidePassword(password.value.trim())){
//         error11.lastElementChild.innerText = 'password has to be 8 characters with a number,special character, uppercase and lowercase';
//         password.style.border = '2px solid #ff3860';
//     }else{
//         error11.lastElementChild.innerText = '';
//         password.style.border = '2px solid #09c372';
//     }

//     if(confirmpassword.value.trim() === ''){
//         confirmpassword.style.border = '2px solid #ff3860';
//         error12.lastElementChild.innerText = 'confirm your password';
//     }else if(confirmpassword.value.trim() != password.value.trim()){
//         error12.lastElementChild.innerText = 'password doesnot match';
//         confirmpassword.style.border = '2px solid #ff3860';
//     }else{
//         confirmpassword.style.border = '2px solid #09c372'; 
//         error12.lastElementChild.innerText = '';
//     }

//     if(directiontohome.value.trim() === ''){
//         directiontohome.style.border = '2px solid #ff3860';
//         error13.lastElementChild.innerText = 'Direction is required'; 

//     }else{
//         directiontohome.style.border = '2px solid #09c372';
//         error13.lastElementChild.innerText = ''; 
//     }

//     if(yearsspent.value.trim() === ''){
//         yearsspent.style.border = '2px solid #ff3860';
//         error14.lastElementChild.innerText = 'indicate years spent in masajja'; 
//     }else if(yearsspent.value.trim() < 10){
//         yearsspent.style.border = '2px solid #ff3860';
//         error14.lastElementChild.innerText = 'your not qualified';
//     }else if(isNaN(yearsspent.value.trim())){
//         yearsspent.style.border = '2px solid #ff3860';
//         error14.lastElementChild.innerText = 'Enter number'; 
//     }else{
//         yearsspent.style.border = '2px solid #09c372';
//         error14.lastElementChild.innerText = '';  
//     }

//     // if(location.value.trim() === ''){
//     //     location.style.border = '2px solid #ff3860';
//     //     error9.lastElementChild.innerText = 'Provide location'
//     // }else{
//     //     location.style.border = '2px solid #09c372'
//     //     error9.lastElementChild.innerText = ''
//     // }

//     if(residence.value === ''){
//         let permanent = document.getElementById('permanent')
//         residence.style.border = '2px solid #ff3860';
//         error10.lastElementChild.innerText = 'Select an option';
//     }else if(residence.value != permanent.value){
//         residence.style.border = '2px solid #ff3860';
//         error10.lastElementChild.innerText = 'you need to be a permanent reidence';
//     }else{
//         residence.style.border = '2px solid #09c372';
//         error10.lastElementChild.innerText = ''; 
//     }

//     if(gender.value === ''){
//         gender.style.border = '2px solid #ff3860';
//         error15.lastElementChild.innerText = 'Select gender'; 
//     }else{
//         gender.style.border = '2px solid #09c372';
//         error15.lastElementChild.innerText = '';  
//     }

//     if(myward.value === ''){
//         myward.style.border = '2px solid #ff3860';
//         error16.lastElementChild.innerText = 'Select LC/Ward'; 
//     }else{
//         myward.style.border = '2px solid #09c372';
//         error16.lastElementChild.innerText = '';   
//     }

//     if(horticulture.checked){
//         valid = true;
//     }else if(dairy.checked){
//         valid = true;
//     }else if(poultry.checked){
//         valid = true
//     }
//     if(valid){
//         error17.lastElementChild.innerText = ''
//     }else{
//         error17.lastElementChild.innerText = 'choose an activity'
//     }


//     }



// each urbanFarmer in urbanFarmers 
// option(value = urbanFarmer._id) #{urbanFarmer.uniquenumber}

// if currentUser 
                // option(value = currentUser._id) #{currentUser.ward}








