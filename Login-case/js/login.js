// login 
var username = 'CHH'
var password = 'HEKLA'


// CREDIT to for login-parameters (getElementById): https://www.youtube.com/watch?v=UAu7cMuu0BI

function Login() {
    if (document.getElementById('username').value == username && document.getElementById('password').value == password ) {
        window.alert('Tillykke, du bliver nu stillet videre, ' + username)
        top.location.href="subpage.html";
    }
    else {
        window.alert('Du har enten oplyst et forkert password eller brugernavn')
    }
    
   
}