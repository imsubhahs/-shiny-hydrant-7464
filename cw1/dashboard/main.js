let shop = document.getElementById("shop");

let basket = JSON.parse(localStorage.getItem("BuyItme")) || [];
let CartItem = basket.length

let generateShop = () => {
  return (shop.innerHTML = shopItemsData
    .map((x) => {
      let { id, Title, Price, Description, Image } = x;
      return `
    <div id=product-id-${id} class="item">
        <img width="220" height="200" src=${Image} alt="">
        <div class="details">
          <h3>${Title}</h3>
          <p>${Description}</p>
          <div class="price-quantity">
            <h2>$ ${Price} </h2>
            <div class="buttons">
            <button id = "addTobag" type="button">Add to Bag</button>
            </div>
          </div>
        </div>
      </div>
    `;
    })
    .join(""));
};

generateShop();

let increment = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);

  if (search === undefined) {
    basket.push({
      id: selectedItem.id,
      item: 1,
    });
  } else {
    search.item += 1;
  }

  // console.log(basket);
  update(selectedItem.id);
  localStorage.setItem("data", JSON.stringify(basket));
};
let decrement = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);

  if (search === undefined) return;
  else if (search.item === 0) return;
  else {
    search.item -= 1;
  }
  update(selectedItem.id);
  basket = basket.filter((x) => x.item !== 0);
  // console.log(basket);
  localStorage.setItem("data", JSON.stringify(basket));
};
let update = (id) => {
  let search = basket.find((x) => x.id === id);
  // console.log(search.item);
  document.getElementById(id).innerHTML = search.item;
  calculation();
};

let calculation = () => {
  let cartIcon = document.getElementById("cartAmount");
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

calculation();