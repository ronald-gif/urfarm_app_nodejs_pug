const validateLogin = (event) =>{
    let val = 0;

    const uniqueNumber = document.getElementById('uniqueNumber');
    const error1 = document.getElementById('error1')
    const password = document.getElementById('password')
    const error2 = document.getElementById('error2')

    let uniqueNumberVaule = uniqueNumber.value.trim();
    let passwordValue = password.value.trim();

    if(uniqueNumberVaule === ''){
        uniqueNumber.style.border = '2px solid #ff3860';
        error1.lastElementChild.innerText = 'Enter unique number';
        val++
    }else{
        uniqueNumber.style.border = '2px solid #ff3860';
        error1.lastElementChild.innerText = '#09c372';
    }

    if(passwordValue === ''){
        password.style.border = '2px solid #ff3860';
        error2.lastElementChild.innerText = 'Enter password';
        val++
    }else{
        password.style.border = '2px solid #09c372';
        error2.lastElementChild.innerText = '';
    }

    if(val > 0){
        event.preventDefault()
    }
}