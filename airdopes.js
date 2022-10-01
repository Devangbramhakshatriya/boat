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
   img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/Grey_560cad08-698b-45d6-a3dd-d10ae3fec8ee_600x.png?v=1657775492",
   img2:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/MG_600x.png?v=1657775492",
   product_name:"boAt Airdopes 131",
   price:"999",
   og_price:"2990",
  },
  {
   img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main3_9230f72d-9f86-4aec-9ae2-a7d87d332877_600x.png?v=1647426798",
   img2:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main1_c5f9fe7c-c012-4d93-ba0c-b25267c0560d_600x.png?v=1647426797",
   product_name:"boAt Airdopes 411",
   price:"2499",
   og_price:"4990",
  },
  {
   img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/iiolo_700x.png?v=1658150489",
   img2:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/fvtfgvt_700x.png?v=1658150489",
   product_name:"boAt Airdopes 121",
   price:"1349",
   og_price:"2990",
  },
  {
   img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/airdopes-121-v2-black_600x.png?v=1612765376",
   img2:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/airdopes-121-v2-blue_600x.png?v=1612765376",
   product_name:"boAt Airdopes 121 v2",
   price:"1049",
   og_price:"2999",
  },
  {
   img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/viper-green_600x.png?v=1642405569",
   img2:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/32011675-2ad8-4b99-9787-895caf201d28_600x.png?v=1642405569",
   product_name:"boAt Airdopes 131",
   price:"899",
   og_price:"2990",
  },
  {
   img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/7925e2ed-89e7-4247-8f27-380ef0178294_600x.png?v=1625045867",
   img2:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/402-main-img_600x.png?v=1630059242",
   product_name:"boAt Airdopes 402",
   price:"1499",
   og_price:"5990",
  },
  {
   img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/115-main1_600x.png?v=1655368638",
   img2:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/115-main4_600x.png?v=1650530656",
   product_name:"boAt Airdopes 115",
   price:"1099",
   og_price:"2990",
  },
  {
   img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-image-3_e05a4bee-499f-42da-8db5-e3921a185f5c_600x.png?v=1655526604",
   img2:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-image-2_93b99319-19ca-4375-9f44-60a89e370422_600x.png?v=1655526604",
   product_name:"boAt Airdopes 131",
   price:"1399",
   og_price:"2990",
  },
  {
   img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/2e056443-6505-46ef-aa88-e20e2778b0a9_600x.png?v=1625046016",
   img2:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/a1b32b3b-7ed4-4b58-ade4-088ee08914c4_600x.png?v=1625046016",
   product_name:"boAt Airdopes 441",
   price:"1799",
   og_price:"5999",
  },
  {
   img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/1_05260e43-8f0b-4776-a433-ea2089c7f7e7_600x.png?v=1659614550",
   img2:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/2_54ba845b-0083-4d47-bb91-f62cf4d3c07c_600x.png?v=1659614551",
   product_name:"boAt Airdopes 141",
   price:"1499",
   og_price:"2990",
  },
  {
   img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/336d66bb-60e6-4b02-831b-864ea4fada9e_600x.png?v=1625045731",
   img2:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/3c53a1e3-bffe-4c6d-b102-cc409c1bfe71_600x.png?v=1625045117",
   product_name:"boAt Airdopes 381",
   price:"1599",
   og_price:"4990",
  },
  {
   img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/413-black_600x.png?v=1658298863",
   img2:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/413-green_600x.png?v=1658298863",
   product_name:"boAt Airdopes 413",
   price:"2149",
   og_price:"4990",
  },
  {
   img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/airdopes-171-blue_600x.png?v=1633518065",
   img2:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/airdopes-171-black_600x.png?v=1633518065",
   product_name:"boAt Airdopes 413",
   price:"1499",
   og_price:"5999",
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
