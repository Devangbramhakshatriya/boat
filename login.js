
    // function Login(){
    //     email1=document.getElementById("email").value;
    // password1=document.getElementById("password").value;
    //     if(email1!="" && password1!=""){
            
    //         getdata=JSON.parse(localStorage.getItem("data"))
    //         if(getdata.email==email1 && getdata.password==password1){
    //             alert("Login succesful")
    //         }else{
    //             alert("Please Enter Correct Details")
    //         }
    //     }else{
    //         alert("Fill all Details")

    //     }
       
    // }
    function login(){
        email=document.querySelector("#email").value;
            pass=document.querySelector("#password").value;
        getdata=JSON.parse(localStorage.getItem("logindata"))
        if (getdata.some((e)=>{return e.email==email && e.password==pass})){
            alert("Login Success Full")
            window.location.href="home.html"
            
        }else{
            alert("please enter corecr details")
        }
    }
  function signup(){
    window.location.href="signup.html"
  }
