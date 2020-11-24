const name=document.getElementById('name')
const email=document.getElementById('email')
const gender=document.getElementById('gender')
const states=document.getElementById('states')

name.addEventListener('blur', ()=>{
    console.log("name is blurred");
    // Validate name here
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
    let str = name.value;
    console.log(regex, str);
    if(regex.test(str)){
        console.log('Your name is valid');
        name.classList.remove('is-invalid');
        validUser = true;
    }
    else{
        console.log('Your name is not valid');
        name.classList.add('is-invalid');
        validUser = false;
    }})

email.addEventListener('blur', ()=>{
    console.log("email is blurred");
 
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    console.log(regex, str);
    if(regex.test(str)){
        console.log('Your email is valid');
        email.classList.remove('is-invalid');
        validEmail = true;
    }
    else{
        console.log('Your email is not valid');
        email.classList.add('is-invalid');
        validEmail = false;
    }
})

var maxAmount = 200;
function textCounter(textField, showCountField) {
    if (textField.value.length > maxAmount) {
        textField.value = textField.value.substring(0, maxAmount);
        textarea.classList.remoe('is-invalid');
	} else { 
        showCountField.value = maxAmount - textField.value.length;
        textarea.classList.add('is-invalid');
	}
}

