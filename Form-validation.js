function register(){
    console.log("calling register function")
    var username=document.getElementById("username")
    console.log(username)
    console.log(username.value)
    console.log(username.value.length)
    if(username.value.length ==""){
        console.log("Please Enter User Name")
        var errorUserName=document.getElementById("errorUserName")
        console.log(errorUserName)
        errorUserName.innerHTML="Please Enter User Name"
    }
   
    
    var gender=document.registration.gender;
    console.log(document.registration)
    console.log(gender)
    if(document.registration.gender[0].checked==false &&
    document.registration.gender[1].checked==false &&
    document.registration.gender[2].checked==false){
        console.log("Please Select Gender")
        var errorGender=document.getElementById("errorGender")
        errorGender.innerHTML="Please Select Gender"

    }
    console.log(document.registration.city)
    console.log(document.registration.city.value)
    if(document.registration.city.value=="0"){
        console.log("Please Select City")
        var errorCity = document.getElementById("errorCity")
        errorCity.innerHTML="Please Select City"
        errorCity.style.color="red"
    }
}