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
     img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_blue_759e7ad4-18af-4407-9e8a-91c0058b1a74_600x.png?v=1648108782",
     img2:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_black_72207866-b34c-4b47-885d-998168d62245_600x.png?v=1648108781",
     product_name:"boAt Wave Lite",
     price:"1299",
     og_price:"6990",
    },
    {
     img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main1_0ae2597d-dee4-42fd-9a18-eb4ae0b3bc43_600x.png?v=1647765304",
     img2:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main3_4d128bbd-a1e7-4045-a5c5-25c744f3133f_600x.png?v=1647765303",
     product_name:"boAt Wave Pro",
     price:"1999",
     og_price:"6990",
    },
    {
     img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/Untitled-5_600x.png?v=1658294451",
     img2:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/blue_58bd5e28-de95-4f31-909d-6bce484bdbd9_600x.png?v=1658294451",
     product_name:"boAt Wave select",
     price:"2499",
     og_price:"6990",
    },
    {
     img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main2_529ecf13-c993-4fe7-a2d6-9357f1a47db4_600x.png?v=1650387008",
     img2:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main1_600x.png?v=1650386995",
     product_name:"boAt Airdopes 121 v2",
     price:"2699",
     og_price:"7990",
    },
    {
     img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/e7910a39-186a-41f6-ac57-fc3e84108104_600x.png?v=1625045106",
     img2:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/1bca7fb9-5f5c-42e3-930a-8a430d8a9e60_600x.png?v=1625046217",
     product_name:"boAt Storm Smart Watch",
     price:"2499",
     og_price:"5990",
    },
    {
     img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/black2_600x.png?v=1654312291",
     img2:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/blue_d8db0011-02f7-43d6-9fe7-7a71a9ed86d2_600x.png?v=1654312290",
     product_name:"boAt Wave Connect",
     price:"2699",
     og_price:"56990",
    },
    {
     img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/9da7e1ae-89f2-42c4-9714-76ac5ec83817_600x.png?v=1625045743",
     img2:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/5752f5e4-89e0-4f84-b7fe-4d9f85771046_600x.png?v=1625157753",
     product_name:"boAt Watch Flash",
     price:"1999",
     og_price:"6990",
    },
    {
     img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-images_600x.png?v=1655198531",
     img2:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-images-2_600x.png?v=1655198531",
     product_name:"boAt Xtend Sport",
     price:"2399",
     og_price:"6990",
    },
    {
     img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main3_d2f6ad16-c97c-4600-88c1-b835fd58c647_600x.png?v=1646394582",
     img2:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main3.1_600x.png?v=1644401072",
     product_name:"boAt Watch Blaze",
     price:"3499",
     og_price:"6999",
    },
    {
     img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/3-2_600x.png?v=1653637007",
     img2:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/1-2_600x.png?v=1653637007",
     product_name:"boAt Wave Neo",
     price:"1699",
     og_price:"5990",
    },
    {
     img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/CMF.1028_600x.png?v=1661155840",
     img2:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/CMF.996_600x.png?v=1661155833",
     product_name:"boAt Xtend Talk",
     price:"2999",
     og_price:"6990",
    },
    {
     img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-image-4_1_600x.png?v=1656016935",
     img2:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-image_1_600x.png?v=1656016935",
     product_name:"boAt Storm Pro",
     price:"2999",
     og_price:"6990",
    },
    {
     img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main1_86ea6392-558a-4943-ab86-f9f12fe8f4d9_600x.png?v=1646393709",
     img2:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main6_2_8e1cdd84-4a34-4e92-97c5-0e1d4ba6da46_600x.png?v=1646393710",
     product_name:"boAt TRbel Watch",
     price:"3499",
     og_price:"7999",
    },
    ];


  
  
  arr.forEach(function (el,i){
    
    cart=document.createElement("div");
    cart.addEventListener("click", function(){
      info(el)
    } )
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
  data=[]
  function info(el){
    data.push(el)
    window.location.href="information.html";
    localStorage.setItem("information",JSON.stringify(data));
  }
  cart=JSON.parse(localStorage.getItem("yourcart"))||[];
  function addcart(el){
    cart.push(el);
    alert("Item Added Successlly In Cart")
    localStorage.setItem("yourcart",JSON.stringify(cart));
  }
  aa=localStorage.getItem("count");
  if(aa==null){
    document.querySelector("#count>h6").innerText=0;
  }else{
    document.querySelector("#count>h6").innerText=aa
    
  }