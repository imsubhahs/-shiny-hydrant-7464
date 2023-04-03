
let cartdata = JSON.parse(localStorage.getItem("BuyItem")) || [];
console.log(localStorage.getItem("BuyItem"));


function display(data) {

 let totalprice = 0;

 data.forEach(function (el, index) {

   let div = document.createElement("div");

   let img = document.createElement("img");
   img.setAttribute("src", el.Image)

   let name = document.createElement("h3");
   name.innerText = el.Title;

   let price = document.createElement("p");
   price.innerText = el.Price;

   let des = document.createElement("p");
   des.innerText = el.Description;

   let rating = document.createElement("p");
   rating.innerText = el.Rating;

   let increment = document.createElement("button");
   increment.innerText = "+";

   let count = 1;
   
   increment.addEventListener("click", function () {
     count++;
     price.innerText = Number(el.Price) * count;
     quantity.innerText = count;

   })

   let quantity = document.createElement("span");
   quantity.innerText = 1;


   let decrement = document.createElement("button");
   decrement.innerText = "-";
   decrement.addEventListener("click", function () {
     count--;
     quantity.innerText = count;
     if(quantity.innerText <= "1"){
       cartdata.splice(index,1);
     }
   })

   div.append(img, name, des, price, rating, increment,quantity, decrement);

   document.querySelector("#shopping-cart").append(div);

   totalprice += Number(el.price);
 });

 let Itemprice = document.querySelector("#cart-total");
 Itemprice.textContent = totalprice;


 document.querySelector("#cupon-active").addEventListener("click", function () {
   let discountvalue = document.querySelector("#cupon-filled").value;

   if (discountvalue === "masai30") {
     Itemprice.innerText = totalprice - Math.floor(totalprice*0.3)
   }
 })

}
document.getElementById("cartAmount").innerText= cartdata.length;

display(cartdata);