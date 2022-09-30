
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
    
  function logout(){
    alert("logout Successfully")
    window.location.href="index.html"
    localStorage.setItem("login_status","flase")
  }
