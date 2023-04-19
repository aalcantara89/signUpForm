let password = document.getElementById("password");
let confirm_password = document.getElementById("confirm_password");

function validatePassword() {
    if(password.value != confirm_password){
        confirm_password.setCustomValidity("Passwords Don't Match");
    } else {
        confirm_password.setCustomValidity("They Match!");
    }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;