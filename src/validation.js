const form = document.getElementById('form');
const name = document.getElementById('name');
const surname = document.getElementById('surname');
const email = document.getElementById('email');
const passwordId = document.getElementById('password');
const passwordConfirmId = document.getElementById('passwordConfirm');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');



// Validação do nome
function nameValidation() {
    if(name.value == '' && surname.value == ''){
        nameError.innerText = "digite o nome e sobrenome.";
        nameError.classList.add ('error')
        name.classList.add('borderErro')
        surname.classList.add('borderErro')
        return false;
    }
    if(name.value == ''){
        nameError.innerText = "digite o nome.";
        nameError.classList.add ('error')
        name.classList.add('borderErro')
        return false;
    }
    if(surname.value == ''){
        nameError.innerText = "digite o sobrenome.";
        nameError.classList.add ('error')
        surname.classList.add('borderErro')
        return false
    }
    return true
}

// Validação do Email
function emailValidation() {
    if(email.value.length >= 6 && email.value.length <= 30){
        const gmail = email.value + "@gmail.com"
        const gmailRegex = new RegExp(/^[a-zA-Z0-9.]+@[a-zA-Z0-9.]+\.[a-zA-Z]/)

        if(gmailRegex.test(gmail)){
            return true
        }else {
            emailError.innerHTML = "Somente letres de (a-z), Números de (0-9) e ponto(.). São permitidos."
            emailError.classList.add('error')
            email.classList.add('borderErro')
            return false
        }
    }
    emailError.innerHTML = "Seu nome de usuário deve ter entre 6 a 30 caracteres."
    emailError.classList.add('error')
    email.classList.add('borderErro')
    return false
}

// Validação da senha
function passwordValidation() {
    if(passwordId.value.length >= 8){
        if(passwordId.value == passwordConfirmId.value){
            return true
        }
        passwordError.innerHTML = "As senhas não são iguais. Tente novamente."
        passwordError.classList.add('error')
        passwordId.classList.add('borderErro')
        passwordConfirmId.classList.add('borderErro')
        return false
    }
    passwordError.innerHTML = "Use 8 caracteres ou mais para sua senha"
    passwordError.classList.add('error')
    passwordId.classList.add('borderErro')
    return false
}