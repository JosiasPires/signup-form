const pwd = document.querySelector('#password');
const confirmpwd = document.querySelector('#cfPassword');
const alert = document.querySelector('.hiddenalert');

confirmpwd.addEventListener('focusout', () => {
    if (pwd.value !== confirmpwd.value) {
        confirmpwd.style.outline = "1px solid red";
        pwd.style.outline = "1px solid red";
        alert.style.visibility = "visible";
    }
    else {
        confirmpwd.style.outline = "1px solid #E5E7EB";
        pwd.style.outline = "1px solid #E5E7EB";
        alert.style.visibility = "hidden";
    }
})