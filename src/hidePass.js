const password = document.getElementById('password');
const passwordComfirm = document.getElementById('passworConfirm');
const eye = document.getElementById('eye');

function eyeHide() {
    if(password.type === "password"){
        password.setAttribute('type', 'text');
        passwordConfirm.setAttribute('type', 'text');
        eye.classList.add('eyeHide')
    }else {
        password.setAttribute('type', 'password');
        passwordConfirm.setAttribute('type', 'password');
        eye.classList.remove('eyeHide')
    }
}