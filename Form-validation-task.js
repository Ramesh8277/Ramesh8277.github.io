function register(){ 
    console.log("registering")
    var username=document.getElementById("username")
    console.log(username)
    console.log(username.value)
    console.log(username.value.length)
    if(username.value.length == ""){
        console.log("Please enter the user name")
        var errorUserName=document.getElementById("errorUserName")
        console.log(errorUserName)
        errorUserName.innerHTML="Please enter the user name"
    }
console.log("registering")
    var email=document.getElementById("email")
    console.log(email)
    console.log(email.value)
    console.log(email.value.length)
    if(email.value.length == ""){
        console.log("Please enter the email")
        var erroremail=document.getElementById("erroremail")
        console.log(erroremail)
        erroremail.innerHTML="Please enter the email"
    }
    console.log("registering")
    var password=document.getElementById("password")
    console.log(password)
    console.log(password.value)
    console.log(password.value.length)
    if(password.value.length == ""){
        console.log("please enter valid passord")
        var passworderror=document.getElementById("passworderror")
        console.log(passworderror)
        passworderror.innerHTML="please enter valid password"
    }
}