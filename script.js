console.log("script running");

//p1
const appleButton = document.querySelector("#apple");
const bananaButton = document.querySelector("#banana");
const mangoButton = document.querySelector("#mango");
const shoppingList = document.querySelector("#shopping-cart");
const imposterButton = document.querySelector("#imposter");
console.log(appleButton);
console.log(shoppingList);

//p2
const addApple = () => {
  // alert("apple button under construction");
  shoppingList.innerHTML += `<p>Apple</p>`;
  totalInCents += 75;
  updateTotal();
};

const addBanana = () => {
  shoppingList.innerHTML += `<p>Banana</p>`;
  totalInCents += 30;
  updateTotal();
};

  const addMango = () => {
  shoppingList.innerHTML += `<p>Mango</p>`;
  totalInCents += 125;
  updateTotal();
  };

  const addimposter = () => {
    shoppingList.innerHTML += `<p>Imposter</p>`;
    updateTotal();
  };
//p3
// total.addEventListener("click", updateTotal());

appleButton.addEventListener("click", addApple);
bananaButton.addEventListener("click", addBanana);
mangoButton.addEventListener("click", addMango);
imposterButton.addEventListener("click", addimposter);

//s1
const total = document.querySelector("#total-span");

const updateTotal = () => {
  total.innerHTML = totalInCents/100;

};
