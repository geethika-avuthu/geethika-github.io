window.addEventListener('load', () => {
    // Via local Storage
    /* const name = localStorage.getItem('NAME');
    const surname = localStorage.getItem('EMAIL'); */

    const name = sessionStorage.getItem('NAME');
    const surname = sessionStorage.getItem('EMAIL');

    document.getElementById('inputName').innerHTML = userNameE1;
    document.getElementById('inputEmail').innerHTML = emailE1;
});