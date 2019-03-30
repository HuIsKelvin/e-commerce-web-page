
// --- cart ---
let cart = document.getElementsByClassName("topbar-cart")[0];
let cart_menu = document.getElementsByClassName("cart-menu")[0];

// show the content in cart
cart.addEventListener("mouseenter", function() {
  cart_menu.style.display = "block";
})
cart.addEventListener("mouseleave", function() {
  cart_menu.style.display = "none";
})

// --- header ---
// --- search ---
let form_search = document.getElementById("form-search");
form_search.addEventListener("focusin", function(e) {
  let color = "#FF6700";
  e.target.style.borderColor = color;
})
form_search.addEventListener("focusout", function(e) {
  e.target.style.borderColor = "#e0e0e0";
})

// --- hero ---
// let category_list = document.querySelector(".home-hero .home-hero-category");
// category_list.addEventListener("mouseover", function(e) {
//   if(e.target.className === "list-item" || e.target.className === "category-list-children") {
//     document.getElementById("list-children").style.display = "block";
//   }
// })
// category_list.addEventListener("mouseout", function(e) {
//   if(e.target.className === "list-item" || e.target.className === "category-list-children") {
//     document.getElementById("list-children").style.display = "none";
//   }
// })