
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
                alert("Account Created Successful")
                window.location.href="home.html"
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
   