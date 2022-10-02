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
     img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/245v2_main_4_600x.png?v=1655719698",
     img2:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/245v2_main_5_600x.png?v=1655787246",
     product_name:"Rockerz 245 V2",
     price:"849",
     og_price:"2990",
    },
    {
     img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main1_15634ca0-9f81-4d11-b891-9a1496f709b1_600x.png?v=1641801688",
     img2:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main3_a08fff6a-7c3d-4663-9499-3421df127e94_600x.png?v=1641801688",
     product_name:"Rockerz 330",
     price:"1249",
     og_price:"2990",
    },
    {
     img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/4a9082ec-d2a5-49b5-9daa-58ee52ec5d12_600x.png?v=1625046507",
     img2:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/6b237ddc-f894-4dfd-a474-2435f93e6611_600x.png?v=1662531863",
     product_name:"Rockerz 255",
     price:"999",
     og_price:"2990",
    },
    {
     img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/0cfa4417-0213-4b49-b78e-0ae68aeb7057_600x.png?v=1625046144",
     img2:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/c9b304e6-1451-4ac7-95a1-5aa1cf51df05_600x.png?v=1625046144",
     product_name:"Rockerz 550",
     price:"1549",
     og_price:"4999",
    },
    {
     img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/756866f0-25e4-4b5d-8b7c-546c2111da69_600x.png?v=1625045615",
     img2:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/1be19528-6d06-4cab-8815-02618b93d3c9_600x.png?v=1625045854",
     product_name:"Rockerz 255Pro",
     price:"999",
     og_price:"3499",
    },
    {
     img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/7499af44-9d7a-489c-80f0-51f7799289e4_600x.png?v=1625045491",
     img2:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/ae22e3a6-9590-401a-94f6-d8ecf42b4932_600x.png?v=1625046351",
     product_name:"Rockerz 450",
     price:"1499",
     og_price:"3990",
    },
    {
     img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/37a91950-9379-4fdd-9ea9-525cb6c9f580_600x.png?v=1625046136",
     img2:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/856349ad-e425-4756-8c36-b33cb8fbf0d6_600x.png?v=1625046136",
     product_name:"Rockerz 335",
     price:"1599",
     og_price:"3990",
    },
    {
     img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/m2_852f9f1f-5498-4e5a-b6a2-0645a7abbc41_600x.png?v=1639153081",
     img2:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/m1_dac5a6b1-7937-4cdf-be70-76bb5a1fcf49_600x.png?v=1639153081",
     product_name:"Rockerz 333 Pro",
     price:"1299",
     og_price:"2990",
    },
    {
     img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/5d5377dc-d3dd-48ba-8ec9-2a1630146d8d_600x.png?v=1625045983",
     img2:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/709d5346-3135-495f-ba7b-80fae784af83_600x.png?v=1625045493",
     product_name:"Rockerz 510",
     price:"1099",
     og_price:".3490",
    },
    {
     img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main4_b04e271b-63a4-45ef-beab-f043f365dde2_600x.png?v=1646987536",
     img2:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main2_b3e953e2-bcad-4e1f-9745-f5b5a2568ee5_600x.png?v=1646987537",
     product_name:"Rockerz 255 Neo",
     price:"949",
     og_price:"2990",
    },
    {
     img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/06bd8915-8db7-4575-9558-c97bf050d8d7_600x.png?v=1625044994",
     img2:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/09448f0a-c559-4f99-aa53-51dc706a76b0_600x.png?v=1625046355",
     product_name:"Rockerz 400",
     price:"1299",
     og_price:"2990",
    },
    {
     img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/e5881832-36f8-4c1c-a767-10f2c2a55a02_600x.png?v=1625046573",
     img2:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/4d6c575d-bb23-4ba3-a144-eeabb6ae0a9a_600x.png?v=1625045497",
     product_name:"Rockerz 413",
     price:"370",
     og_price:"2499",
    },
    {
     img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/d6eddcd1-2d1b-47a6-9103-77e629241a09_600x.png?v=1625045647",
     img2:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/fd0e55b0-ca9e-4aa8-b94f-5cca99189951_600x.png?v=1625045647",
     product_name:"Rockerz 600",
     price:"1699",
     og_price:"3990",
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
  d=JSON.parse(localStorage.getItem("yourcart"))
  document.querySelector("#count>h6").innerText=d.length