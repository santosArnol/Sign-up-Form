password = document.getElementById('password');

passwordConfirm = document.getElementById('pass-confirm');

console.log(password.value)


function validate(el){
    if(el != password.value){
        console.log('asda')
        passwordConfirm.setCustomValidity("Invalid field.");
    }
    else{
        passwordConfirm.setCustomValidity("");
    }
    
}

passwordConfirm.addEventListener('blur', (el) => {
    validate(el.target.value)
})