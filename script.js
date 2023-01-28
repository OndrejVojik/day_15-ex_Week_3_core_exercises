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
  ],
};

const cartStr = JSON.stringify(cart);

const shopping_cart = JSON.parse(cartStr);
////////////////////////////////////////////////////////////////////////////////

let cheapest = null;

shopping_cart.items.forEach((item) => {
  // if (cheapest === null || cheapest.price > item.price) {
  //   cheapest = item;
  // }
  cheapest = cheapest === null || cheapest.price > item.price ? item : cheapest;
});

/////////////////////////////////////////////////////////////////////////////////
const btn = document.querySelector("button.remove-cheapest");

btn.addEventListener("click", (event) => {
  console.log(cheapest);
  shopping_cart.items.forEach((item, index) => {
    console.log(cheapest);
    console.log(index);

    if (item.price === 29) {
      shopping_cart.items.splice(index, 1);
    }
  });
  console.log(shopping_cart.items);
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
// const displayItems = (obj) => {
//   let list = document.querySelector("ul.items");

//   obj.items.forEach((ite) => {
//     let listItem = document.createElement("li");
//     listItem.classList.add("items__item");
//     listItem.innerHTML = `${ite.name} (${ite.amount})`;
//     list.appendChild(listItem);
//   });
// };

// displayItems(cart);
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

displayItems(cart);

