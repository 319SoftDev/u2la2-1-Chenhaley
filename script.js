console.log("script running");

let totalInCents = 0;

const appleButton = document.querySelector("#apple");
const bananaButton = document.querySelector("#banana");
const mangoButton = document.querySelector("#mango");
const imposterButton = document.querySelector("#imposter");
const shoppingCart = document.querySelector("#shopping-cart");
const totalSpan = document.querySelector("#total-span");

const clearButton = document.querySelector("#clear-button");

console.log(appleButton, bananaButton, mangoButton, shoppingCart, totalSpan);

const updateTotal = () => {
  totalSpan.innerHTML = totalInCents / 100;
};

const addApple = () => {
  shoppingCart.innerHTML = `<li>Apple</li>`;
  totalInCents += 75;
  updateTotal();
};
appleButton.addEventListener("click", addApple);

const addBanana = () => {
  shoppingCart.innerHTML = `<li>Banana</li>`;
  totalInCents += 30;
  updateTotal();
};
bananaButton.addEventListener("click", addBanana);

const addMango = () => {
  shoppingCart.innerHTML = `<li>Mango</li>`;
  totalInCents += 125;
  updateTotal();
};
mangoButton.addEventListener("click", addMango);

const addImposter = () => {
  shoppingList.innerHTML += `<p>Imposter</p>`;
  totalInCents += 225;
  updateTotal();
};
imposterButton.addEventListener("click", addImposter);

const emptyCart = () => {
  shoppingCart.innerHTML = '';
  totalInCents = 0;
  updateTotal();
}
clearButton.addEventListener("click", emptyCart);

  
//p3
// total.addEventListener("click", updateTotal());

