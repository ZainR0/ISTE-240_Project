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



console.log(userCredentials);