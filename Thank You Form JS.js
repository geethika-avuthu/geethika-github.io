let Result = document.getElementById("Result");
let userInput = document.getElementById("userInput");
let randomNumber = Math.ceil((Math.random() * 10000), 5);
console.log(randomNumber);

window.addEventListener('load', () => {
    // Via local Storage
    /* const name = localStorage.getItem('NAME');
    const surname = localStorage.getItem('EMAIL'); */

    const name = sessionStorage.getItem('NAME');
    const surname = sessionStorage.getItem('EMAIL');

    document.getElementById('inputName').innerHTML = userNameE1;
    document.getElementById('inputEmail').innerHTML = emailE1;
});
function checkGuess() {
    let guessedNumber = parseInt(userInput.value)
    if (guessedNumber > randomNumber || guessedNumber < randomNumber) {
        Result.textContent = "Wrong OTP!";
        Result.style.backgroundColor = "#1e217c"
    } else if (guessedNumber !== randomNumber) {
        Result.textContent = "Please provide a valid input";
        Result.style.backgroundColor = "red"
    } else if (guessedNumber === randomNumber) {
        alert('Validation Succesful');

    }

}