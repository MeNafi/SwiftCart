// cart.js
import { allProducts, cart } from './config.js';
import { updateCartUI } from './ui.js';


// ADD TO CART
export function addToCart(id) {
  const product = allProducts.find(p => p.id === id);
  if (!product) return;

  if (cart.some(item => item.id === id)) {
    alert("Item already in cart!");
    return;
  }

  cart.push(product);
  saveCart();
  updateCartUI();
}


// REMOVE FROM CART
export function removeFromCart(id) {
  const index = cart.findIndex(item => item.id === id);

  if (index > -1) {
    cart.splice(index, 1);
    saveCart();
    updateCartUI();
  }
}


// SAVE TO LOCAL STORAGE
function saveCart() {
  localStorage.setItem("swiftCart_cart", JSON.stringify(cart));
}


// OPTIONAL → make accessible in HTML onclick
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
