const pwd = document.querySelector('#password');
const confirmpwd = document.querySelector('#cfPassword');
confirmpwd.addEventListener('focusout', () => {
    if (pwd.value !== confirmpwd.value) confirmpwd.style.outline = "1px solid red";
    else confirmpwd.style.outline = "1px solid #E5E7EB";
})