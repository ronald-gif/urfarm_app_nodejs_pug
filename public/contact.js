const validateInputs = (event) =>{
    let val = 0;
    
    const firstname = document.getElementById('firstname');
    const error1 = document.getElementById('error1')
    const phoneNumber = document.getElementById('phoneNumber')
    const error2 = document.getElementById('error')
    const message = document.getElementById('message')
    const error3 = document.getElementById('error3')

    const firstnameValue = firstname.value.trim()
    const phoneNumberValue = phoneNumber.value.trim()
    const messageValue = message.value.trim()

    let isValidePhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    if(firstnameValue === ''){
        firstname.style.border = '2px solid #ff3860';
        error1.lastElementChild.textContent = 'Name is required';
        val++
    }else{
        firstname.style.border = '2px solid #09c372';
        error1.lastElementChild.textContent = '' 
    }

    if(phoneNumberValue === ''){
        phoneNumber.style.border = '2px solid #ff3860';
        error2.lastElementChild.textContent = 'phone number is required';
        val++
    }else if(phoneNumberValue.match(isValidePhone)){
        phoneNumber.style.border = '2px solid #ff3860';
        error2.lastElementChild.textContent = 'Enter valid phone number'
        val++ 
    }else{
        phoneNumber.style.border = '2px solid #09c372';
        error2.lastElementChild.textContent = '' 
    }

    if(messageValue === ''){
        message.style.border = '2px solid #ff3860'
        error3.lastElementChild.textContent = 'message is required';
        val++
    }else{
        message.style.border = '2px solid #09c372'
        error3.lastElementChild.textContent = '' 
    }
    
    if(val > 0){
        event.preventDefault()
    }
}