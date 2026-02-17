// main.js
import { elements } from './config.js';
import { fetchCategories, fetchProducts } from './api.js';
import { updateCartUI } from './ui.js';

// --- Initialization ---
document.addEventListener('DOMContentLoaded', async () => {
  await fetchCategories();
  await fetchProducts();
  updateCartUI();
});

// --- Cart Sidebar Toggle ---
window.toggleCartModal = function () {
  document.getElementById('cart-modal').classList.toggle('hidden');
};

// --- Mobile Navigation ---
if (elements.mobileMenuBtn) {
  elements.mobileMenuBtn.addEventListener('click', () => {
    elements.mobileMenu.classList.toggle('hidden');
  });
}
