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


arr=[
  {
    id: "Airdopes",
   img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/fvtfgvt_400x.png?v=1658150489",
   img2:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/airdopes-121-v2-blue_400x.png?v=1612765376",
   product_name:"boAt Airdopes 121 PRO",
   price:"1299",
   og_price:"2990"
   },
  {
    id: "Airdopes",
   img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/airdopes-121-v2-blue_400x.png?v=1612765376",
   img2:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/fvtfgvt_400x.png?v=1658150489",
   product_name:"boAt Airdopes 121 V2",
   price:"929",
   og_price:"2999"
   },
  {
    id: "Airdopes",
   img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/white_400x.png?v=1657869596",
   img2:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/fvtfgvt_400x.png?v=1658150489",
   product_name:"boAt Airdopes 141",
   price:"949",
   og_price:"4490"
   },
  {
    id: "Rockerz",
   img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/6b237ddc-f894-4dfd-a474-2435f93e6611_400x.png?v=1662531863",
   product_name:"boAt Rockerz 255",
   img2:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/fvtfgvt_400x.png?v=1658150489",
   price:"999",
   og_price:"2990"
   },
  {
    id: "Rockerz",
   img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-img-R333-1_400x.png?v=1641801662",
   img2:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/fvtfgvt_400x.png?v=1658150489",
   product_name:"boAt Rockerz 333",
   price:"1199",
   og_price:"3990"
   },
  {
    id: "Rockerz",
   img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-img-R333-1_400x.png?v=1641801662",
   img2:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/fvtfgvt_400x.png?v=1658150489",
   product_name:"boAt Rockerz 550",
   price:"1499",
   og_price:"4999"
   },
  {
    id: "Watch",
   img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/blue_58bd5e28-de95-4f31-909d-6bce484bdbd9_400x.png?v=1658294451",
   product_name:"boAt Wave select Smartwatch",
   img2:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/fvtfgvt_400x.png?v=1658150489",
   price:"2499",
   og_price:"6990"
   },
  {
    id: "Watch",
   img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/xtend_black_400x.png?v=1650387008",
   img2:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/fvtfgvt_400x.png?v=1658150489",
   product_name:"boAt Watch Xtend With Alexa",
   price:"2699",
   og_price:"7990"
   },
  
  ];
  
  
  arr.forEach(function (el,i){
    
    cart=document.createElement("div");
    image=document.createElement("img");
    image.src=el.img;
    image.onmouseover=function(){
      onimg(el,i)
    }
    image.onmouseout=function(){
      outimg(el,i)
    }
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
    cart.append(image,title,price,og_price,btn);
    document.querySelector("#container").append(cart)
    localStorage.setItem("data",JSON.stringify(el))
  })
  cart=JSON.parse(localStorage.getItem("yourcart"))||[];
  function addcart(el){
    cart.push(el);
    localStorage.setItem("yourcart",JSON.stringify(cart));
  }
  function onimg(i){
    image.src=i.img2
  }
  function outimg(i){
    image.src=i.img
  }

  
  cart=JSON.parse(localStorage.getItem("yourcart"))||[];
  function addcart(el){
    cart.push(el);
    localStorage.setItem("yourcart",JSON.stringify(cart));
  }
