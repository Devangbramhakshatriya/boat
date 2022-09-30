
    function signup(){
    let email=document.getElementById("email")
    let password=document.getElementById("password")
    let mobile=document.getElementById("mobile")
arr= JSON.parse(localStorage.getItem("logindata"))||[]
        if(arr.some((e)=>{return e.email!=email}))
        {
            obj={
                email:email.value,
                password:password.value,
                mobile:mobile.value,
            };
            
            if(email.value!=""||password.value!=""||mobile.value!=""){
                arr.push(obj)
                localStorage.setItem("logindata",JSON.stringify(arr));
                alert("Account Created Successfull")
                window.location.href="index.html"
                localStorage.setItem("login_status","true")
            }
                else{
                    alert("Fill All Details")
                }
            
        }else{
            
            alert("duplicate")   
        } 
    
    }
    function login(){
        window.location.href="login.html"
    }
   