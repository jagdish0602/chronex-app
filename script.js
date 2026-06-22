/* =========================
   CART SYSTEM
========================= */

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {

   cart.push({
      name,
      price
   });

   localStorage.setItem("cart", JSON.stringify(cart));

   renderCart();

   alert(name + " added to cart");

}

/* =========================
   OPEN CART
========================= */

function openCart() {

   document
      .getElementById("cartSidebar")
      .classList.add("active");

   renderCart();

}

function closeCart() {

   document
      .getElementById("cartSidebar")
      .classList.remove("active");

}

/* =========================
   RENDER CART
========================= */

function renderCart() {

   const container =
      document.getElementById("cartItems");

   container.innerHTML = "";

   cart.forEach((item, index) => {

      container.innerHTML += `

<div class="cart-item">

<h4>${item.name}</h4>

<p>₹${item.price}</p>

</div>

`;

   });

}

/* WISHLIST  */

let wishlist =
   JSON.parse(localStorage.getItem("wishlist")) || [];

function toggleWishlist(icon, product) {

   icon.classList.toggle("fa-regular");

   icon.classList.toggle("fa-solid");

   if (!wishlist.includes(product)) {

      wishlist.push(product);

   } else {

      wishlist = wishlist.filter(
         item => item !== product
      );

   }

   localStorage.setItem(
      "wishlist",
      JSON.stringify(wishlist)
   );

}