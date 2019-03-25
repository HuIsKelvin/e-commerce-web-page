
// --- cart ---
let cart = document.getElementsByClassName("topbar-cart")[0];
let cart_menu = document.getElementsByClassName("cart-menu")[0];

cart.addEventListener("mouseenter", () => {
  cart_menu.style.display = "block";
})
cart.addEventListener("mouseleave", () => {
  cart_menu.style.display = "none";
})

// --- header ---
// --- search ---
let form_search = document.getElementById("form-search");
form_search.addEventListener("focusin", (e)=> {
  let color = "#FF6700";
  e.target.style.borderColor = color;
})
form_search.addEventListener("focusout", (e)=> {
  e.target.style.borderColor = "#e0e0e0";
})