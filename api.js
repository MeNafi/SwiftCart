// api.js
import { apiBase, elements, setAllProducts } from './config.js';
import { renderProducts, renderCategoryButtons } from './ui.js';

// --- Fetch Categories ---
export async function fetchCategories() {
  try {
    const res = await fetch('https://fakestoreapi.com/products/categories');
    const categories = await res.json();
    renderCategoryButtons(categories);
  } catch (error) {
    console.error(error);
  }
}

// --- Fetch Products ---
export async function fetchProducts(category = null) {
  elements.loader.classList.remove('hidden');

  let url = category
    ? `https://fakestoreapi.com/products/category/${encodeURIComponent(category)}`
    : `https://fakestoreapi.com/products`;

  try {
    const res = await fetch(url);

    if (!res.ok) throw new Error("API failed");

    const data = await res.json();

    setAllProducts(data);
    renderProducts(data);

  } catch (err) {
    console.error(err);
    elements.productsGrid.innerHTML =
      `<p class="text-center text-red-500 w-full">Failed to load products</p>`;
  } finally {
    elements.loader.classList.add('hidden');
    elements.productsGrid.classList.remove('hidden');
  }
}

