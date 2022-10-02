cartdata=JSON.parse(localStorage.getItem("yourcart"))
count=cartdata.length
if(count==0){
    h1=document.createElement("h1")
    h1.innerText="No Item in Your Cart"
    document.querySelector("#order").append(h1)
}else{
    document.querySelector("#yourcart>p>span").innerText=count
    localStorage.setItem("count",count)
}
Tot=0;
cartdata.forEach(function(el,i){
cont=document.createElement("div")
cont1=document.createElement("div");
img=document.createElement("img");
img.src=el.img;
cont2=document.createElement("div")
h3=document.createElement("h3");
h3.innerText=el.product_name;
h2=document.createElement("h2");
h2.innerText=el.price;
p=document.createElement("p");
p.innerText=el.og_price;
cont3=document.createElement("div")
h4=document.createElement("button");
h4.innerHTML=`<i class="fa-regular fa-trash-can"></i>`;
h4.className="delete";
h4.addEventListener("click", function(event){
    dlt(i)
})
Tot=Tot+(+el.price);
cont1.append(img)
cont2.append(h3,h2,p)
cont3.append(h4)
cont.append(cont1,cont2,cont3)
document.getElementById("order").append(cont)
})
function dlt(i){
    cartdata.splice(i,1)
    window.location.reload()
    localStorage.setItem("yourcart",JSON.stringify(cartdata))
    count--;
    Tot=Tot-(+el.price);
}
document.querySelector("#payment>h3>span").innerText=Tot