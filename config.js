// config.js
export const apiBase = "https://fakestoreapi.com/products";

export const elements = {
  productsGrid: document.getElementById('products-grid'),
  categoryContainer: document.getElementById('category-container'),
  loader: document.getElementById('loader'),
  cartCountEl: document.getElementById('cart-count'),
  mobileMenuBtn: document.getElementById('mobile-menu-btn'),
  mobileMenu: document.getElementById('mobile-menu'),
  cartItemsContainer: document.getElementById('cart-items-container'),
  cartTotalEl: document.getElementById('cart-total'),
  productModal: document.getElementById('product-modal')
};

// Global state
export let allProducts = [];
export let cart = JSON.parse(localStorage.getItem('swiftCart_cart')) || [];

export const setAllProducts = (data) => {
  allProducts = data;
};