let userNameEl = document.getElementById("userName");
let email = document.getElementById("inputEmail");
let panNumber = document.getElementById("pannumber");
let loanAmount = document.getElementById("inputLoanAmount");
let firstNumberElement = document.getElementById("firstNumber");
let secondNumberElement = document.getElementById("secondNumber");
let userInputElement = document.getElementById("userInput");
let captchaResultElement = document.getElementById("captchaResult");
let successMessage = "Congratulations! You got it right.";
let tryAgainMessage = "Please Try Again!";

function submitBtn() {   
    if (allLetter(userNameEl, 4)) {
        if (ValidateEmail(email)) {
            if (alphanumeric(panNumber, 10)) {
                if (allnumeric(loanAmount, 9)) {
                    if (checkResult()) {}
                }
            }
        }
    }
    return false;
}

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

function ValidateEmail(email) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.value.match(mailformat)) {
        return true;
    } else {
        alert("You have entered an invalid email address!");
        email.focus();
        return false;
    }
}

function alphanumeric(panNumber, mx) {
    var letters = /^[0-9a-zA-Z]+$/;
    var panNumber_len = panNumber.value.length;
    if (panNumber.value.match(" ") || (panNumber_len == 0 || panNumber_len < mx || panNumber_len > mx)) {
        alert('PAN Number must have alphanumeric characters only');
        panNumber.focus();
        return false;
    } else if (panNumber.value.match(letters)) {
        return true;
    }
}

function allnumeric(loanAmount, mx) {
    var numbers = /^[0-9]+$/;
    var loanAmount_len = loanAmount.value.length;
    if (loanAmount.value.match(" ") || (loanAmount_len <= 0 || loanAmount_len > mx)) {
        alert('Loan amount must have numeric and 9 digits only');
        loanAmount.focus();
        return false;
    } else if (loanAmount.value.match(numbers)) {
        return true;
    }
}

function checkResult() {
    let firstRandomNumber = parseInt(firstNumberElement.textContent);
    let secondRandomNumber = parseInt(secondNumberElement.textContent);
    let userEnteredSum = parseInt(userInputElement.value);
    let sumOfTwoRandomIntegers = firstRandomNumber + secondRandomNumber;
    if (userEnteredSum === sumOfTwoRandomIntegers) {
        captchaResultElement.textContent = successMessage;
        captchaResultElement.style.backgroundColor = "#028a0f";
    } else {
        captchaResultElement.textContent = tryAgainMessage;
        captchaResultElement.style.backgroundColor = "#1e217c";
    }
}

function refreshCaptcha() {
    let firstRandomNumber = Math.random() * 100;
    let secondRandomNumber = Math.random() * 100;
    firstNumberElement.textContent = Math.ceil(firstRandomNumber);
    secondNumberElement.textContent = Math.ceil(secondRandomNumber);
    captchaResultElement.textContent = "";
    userInputElement.value = "";
}
refreshCaptcha();
