// more items added for better testing

const cart = {
  total: {
    amount: 91.6,
    currency: "CZK",
  },
  items: [
    {
      name: "Apples",
      amount: "2kg",
      price: 62.6,
    },
    {
      name: "Cinnamon",
      amount: 1,
      price: 29,
    },
    {
      name: "Pineapple",
      amount: 3,
      price: 100,
    },
    {
      name: "Lemon",
      amount: 1,
      price: 10,
    },
    {
      name: "Kiwi",
      amount: 3,
      price: 70,
    },
  ],
};

const cartStr = JSON.stringify(cart);

const shopping_cart = JSON.parse(cartStr);
////////////////////////////////////////////////////////////////////////////////

let cheapest = null;

/////////////////////////////////////////////////////////////////////////////////
const btn = document.querySelector("button.remove-cheapest");

btn.addEventListener("click", (e) => {
  shopping_cart.items.forEach((item, index) => {
    cheapest =
      cheapest === null || cheapest.price > item.price ? item : cheapest;
    console.log(cheapest);
  });

  const cheapestIndx = cart.items.indexOf(cheapest);
  console.log(cheapestIndx);

  shopping_cart.items.splice(cheapestIndx, 1);

  displayItems(shopping_cart);
});

///////////////////////////////////////////////////////////////////////////////////

// const displayItems = (obj)=>{
// let list = document.querySelector('ul.items');
// obj.items.forEach((ite)=>{
// list.innerHTML += `<li class= "items__item">${ite.name} (${ite.amount}) </li>`;
// })
// }

// displayItems(cart)

///////////////////////////////////////////////////////////////////////////////////////////////////
const displayItems = (obj) => {
  let list = document.querySelector("ul.items");
  list.innerHTML = "";

  obj.items.forEach((ite) => {
    let listItem = document.createElement("li");
    listItem.classList.add("items__item");
    listItem.innerHTML = `${ite.name} (${ite.amount})`;
    list.appendChild(listItem);
  });
};

displayItems(shopping_cart);
