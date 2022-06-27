function login(){
    console.log("calling login")
    var email=document.getElementById("email")
    var password=document.getElementById("password")
    console.log(name.value)
    console.log(email.value)
    console.log(password.value)

    var register=localStorage.getItem("data")
    console.log(register)
    console.log(register.email)
    var registerObject=JSON.parse(register)
    console.log(registerObject.email)
   
    if(email.value==registerObject.email && password.value==registerObject.password){
        console.log("Login successfull")
        window.location.href="file:///D:/xworkz_html/Ramesh8277.github.io/Form.html"
    }else{
        console.log("Invaild Email and Password")
    }

  
}