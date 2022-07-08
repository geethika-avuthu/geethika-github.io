let addUserFormEl = document.getElementById("addUserForm");
let userNameEl = document.getElementById("userName");
let emailEl = document.getElementById("inputEmail");
let panNumberEl = document.getElementById("pannumber");
let loanAmountEl = document.getElementById("inputLoanAmount");
let firstNumberEl = document.getElementById("firstNumber");
let secondNumberEl = document.getElementById("secondNumber");
let userInputEl = document.getElementById("userInput");
let captchaResultEl = document.getElementById("captchaResult");
let submitButtonEl = document.getElementById("submitbtn");

let successMessage = "Congratulations! You got it right.";
let tryAgainMessage = "Please Try Again!";


function allLetter(userNameEl, mx) {
    var letters = /^[A-Za-z]+$/;
    var userNameEl_len = userNameEl.value.length;
    if (userNameEl_len == 0 || userNameEl_len < mx) {
        alert("Username must have alphabets and spaces only / length should be minimum " + mx);
        userNameEl.focus();
        return false;
    } else if (userNameEl.value.match(letters) || userNameEl.value.match(" ")) {
        return true;
    }
}


function ValidateEmail(emailEl) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (emailEl.value.match(mailformat)) {
        return true;
    } else {
        alert("You have entered an invalid email address!");
        emailEl.focus();
        return false;
    }
}


function alphanumeric(panNumberEl, mx) {
    var letters = /^[0-9a-zA-Z]+$/;
    var panNumberEl_len = panNumberEl.value.length;
    if (panNumberEl.value.match(" ") || (panNumberEl_len == 0 || panNumberEl_len < mx || panNumberEl_len > mx)) {
        alert('PAN Number must have alphanumeric characters only');
        panNumberEl.focus();
        return false;
    } else if (panNumberEl.value.match(letters)) {
        return true;
    }
}

function allnumeric(loanAmountEl, mx) {
    var numbers = /^[0-9]+$/;
    var loanAmountEl_len = loanAmountEl.value.length;
    if (loanAmountEl.value.match(" ") || (loanAmountEl_len <= 0 || loanAmountEl_len > mx)) {
        alert('Loan amount must have numeric and 9 digits only');
        loanAmountEl.focus();
        return false;
    } else if (loanAmountEl.value.match(numbers)) {
        return true;
    }
}


function refreshCaptcha() {
    let firstRandomNumber = Math.random() * 100;
    let secondRandomNumber = Math.random() * 100;
    firstNumberEl.textContent = Math.ceil(firstRandomNumber);
    secondNumberEl.textContent = Math.ceil(secondRandomNumber);
    captchaResultEl.textContent = "";
    userInputEl.value = "";
}
refreshCaptcha();

function checkResult() {
    let firstRandomNumber = parseInt(firstNumberEl.textContent);
    let secondRandomNumber = parseInt(secondNumberEl.textContent);
    let userEnteredSum = parseInt(userInputEl.value);
    let sumOfTwoRandomIntegers = firstRandomNumber + secondRandomNumber;
    if (userEnteredSum === sumOfTwoRandomIntegers) {
        captchaResultEl.textContent = successMessage;
        captchaResultEl.style.backgroundColor = "#028a0f";
    }
}

function Submit(submitButtonEl) {
    if (allLetter(userNameEl, 4)) {
        if (ValidateEmail(emailEl)) {
            if (alphanumeric(panNumberEl, 10)) {
                if (allnumeric(loanAmountEl, 9)) {
                    if (checkResult()) {}
                }
            }
        }
    }
    return false;
}

function handleSubmit() {
    // to set into local storage
    /* localStorage.setItem("NAME", userNameEl);
    localStorage.setItem("EMAIL", emailEl); */
    sessionStorage.setItem("NAME", userNameEl);
    sessionStorage.setItem("EMAIL", emailEl);
    return;
}