

function signUp() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('registration-form').style.display = 'block';
}
function alreadyHaveAccount() {
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('registration-form').style.display = 'none';
}
const userName = document.getElementById('username').value;
const emailAddress = document.getElementById('emailAddress');
const password = document.getElementById('password').value;
const passwordConfirmation = document.getElementById('passwordConfirmation').value;
const loginEmail = document.getElementById('LoggingEmailAddress');
const loginPass = document.getElementById('loggingPassword');

document.getElementById('login-btn').addEventListener('click', function () {
    const userEmail = loginEmail.value;
    const userPass = loginPass.value;
    if (userEmail == "jahid@gmail.com" && userPass == "2424") {
        document.getElementById('popup-success').style.display = 'block';
        window.location.href = 'banking.html';
        loginEmail.value = "";
        loginPass.value = "";
    }
    else {
        document.getElementById('popup-error').style.display = 'block';
    }

    //     if (emailAddress == jahid@2424 $$ password == 2424){
    //     console.log('Access Granted')
    // }
    //     else {
    //     console.log('Invalid Email or password.')
}
)
document.getElementById('popup-error').addEventListener('click', function () {
    document.getElementById('popup-error').style.display = 'none';
})
document.getElementById('popup-success').addEventListener('click', function () {
    document.getElementById('popup-success').style.display = 'none';
})

