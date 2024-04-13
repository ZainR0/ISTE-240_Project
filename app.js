let userCredentials = {
    'username1': 'password1', 
    'username2': 'password2', 
    'username3': 'password3'
}

function appendCreds(uname, pwd) {
    userCredentials[uname] = pwd
}

function checkCredentials(username, password) {
    return userCredentials[username] === password;
}

function validateCredentials(){
    let username = (document.getElementById('username')).value;
    let password = (document.getElementById('password')).value;
    if (!checkCredentials(username, password)){
        loginmessage.textContent = 'Invalid Username or Password'
        event.preventDefault();
    }
}

function pwdVal(){
    let password = (document.getElementById(pwd)).value;
    // let regex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/;
    

    if(!isValid){
        document.getElementById('password-error').style.display = "block";
        event.preventDefault();
    }
}

function pwdConfirm(){
    if((document.getElementById('pwd')).value != (document.getElementById('pwd2')).value) {
        document.getElementById('match-error').style.display = "block";
        
    }
}

//don't use, it doesn't work for some reason
function validateall(){
    pwdVal();
    pwdConfirm();
}

function validate(){
    regex=/^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/;
    let password = document.getElementByIda('pwd').value;
    let isValid = regex.test(password);
    let repassword = document.getElementById('pwd2').value;
    
}

validate()


