let userNameEl = document.getElementById('userName');
let email = document.getElementById('inputEmail');
let panNumber = document.getElementById('pannumber');
let loanAmount = document.getElementById('inputLoanAmount');
let firstNumberElement = document.getElementById('firstNumber');
let secondNumberElement = document.getElementById('secondNumber');
let userInputElement = document.getElementById('userInput');
let captchaResultElement = document.getElementById('captchaResult');


function allLetter(userNameEl, mx) {
    var letters = /^[A-Za-z]+$/;
    var userNameEl_len = userNameEl.value.length;
    if (userNameEl_len == 0 || userNameEl_len < mx) {
        userNameEl.focus();
        return false;
    } else if (userNameEl.value.match(letters) || userNameEl.value.match(' ')) {
        return true;
    }
}

function ValidateEmail(email) {
    var mailformat = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
    if (email.value.match(mailformat)) {
        return true;
    } else if (email.value === '') {
        alert('enter email');
    } else {
        email.focus();
        return false;
    }
}

function alphanumeric(panNumber, mx) {
    var letters = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    var panNumber_len = panNumber.value.length;
    if (panNumber.value.match(' ') || panNumber_len == 0 || panNumber_len < mx || panNumber_len > mx) {
        panNumber.focus();
        return false;
    } else if (panNumber.value.match(letters)) {
        return true;
    }
}

function allnumeric(loanAmount, mx) {
    var numbers = /^[0-9]+$/;
    var loanAmount_len = loanAmount.value.length;
    if (loanAmount.value.match(' ') || loanAmount_len <= 0 || loanAmount_len > mx) {
        alert('Loan amount must have numeric and 9 digits only');
        loanAmount.focus();
        return false;
    } else if (loanAmount.value.match(numbers)) {
        return true;
    }
}

function refreshCaptcha() {
    let firstRandomNumber = Math.random() * 100;
    let secondRandomNumber = Math.random() * 100;
    firstNumberElement.textContent = Math.ceil(firstRandomNumber);
    secondNumberElement.textContent = Math.ceil(secondRandomNumber);
    captchaResultElement.textContent = '';
    userInputElement.value = '';
}
refreshCaptcha();

function submitBtn() {
    if (allLetter(userNameEl, 4)) {
        if (ValidateEmail(email)) {
            if (alphanumeric(panNumber, 10)) {
                if (allnumeric(loanAmount, 9)) {

                }
            }
        }
    }
    return false;
}

// document.getElementById('form').addEventListener('submit', submitBtn);
