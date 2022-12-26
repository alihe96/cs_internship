let shop = [
  { name: "water", price: 1000 },
  { name: "milk", price: 2000 },
  { name: "coca", price: 3000 },
  { name: "joice", price: 4000 },
  { name: "chips", price: 5000 },
  { name: "suger", price: 6000 },
  { name: "salt", price: 7000 },
  { name: "honey", price: 8000 },
];

let userBasket = [
  { name: "salt", price: 7000 },
  { name: "honey", price: 8000 },
];

let userSearch = prompt("enter product name : "); //coca

let userRequest;

let isInshop = shop.some(function (product) {
  if (product.name === userSearch) {
    userRequest = product;
    return true;
  }
});

if (isInshop === true) {
  let addbasket = {
    name: userRequest.name,
    price: userRequest.price,
  };

  userBasket.push(addbasket);
  alert(userSearch + "  added to your basket");

  let sum = 0;
  userBasket.forEach(function (product) {
    sum = sum + product.price;
  });
  alert("total price : " + sum);
} else {
  alert("sold out");
}
