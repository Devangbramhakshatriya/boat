logindata=localStorage.getItem("login_status")
if(logindata=="true"){
  function login_logout(){
    
    window.location.href="logout.html"
    console.log(logindata)
  }
}else{
  function login_logout(){
    window.location.href="login.html"
  }
}
arr=JSON.parse(localStorage.getItem("information"))
arr.forEach(function (el,i){
    
    cart=document.createElement("div");
    cart.addEventListener("click", function(){
      info(el)
    } )
    image=document.createElement("img");
    image.src=el.img;
    image.mouseover=function(){
      onimg(el)
    }
    image.onmouseout=function(){
      outimg(el)
    }
    cart1=document.createElement("div");
    title=document.createElement("h2");
    title.innerText=el.product_name;
    price=document.createElement("h1");
    price.innerText=el.price;
    og_price=document.createElement("p");
    og_price.innerText=el.og_price;
    btn=document.createElement("button");
    btn.innerText="Add To Cart"
    btn.addEventListener("click",function(){
      addcart(el)
    });
    cart.append(image);
    cart1.append(title,price,og_price,btn)
    document.querySelector("#container").append(cart,cart1)
    localStorage.setItem("data",JSON.stringify(el))
  })
  cart=JSON.parse(localStorage.getItem("yourcart"))||[];
  function addcart(el){
    cart.push(el);
    localStorage.setItem("yourcart",JSON.stringify(cart));
   rel()
  }
  d=JSON.parse(localStorage.getItem("yourcart"))
  document.querySelector("#count>h6").innerText=d.length