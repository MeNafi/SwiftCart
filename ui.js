// ui.js
import { elements, allProducts, cart } from './config.js';
import { fetchProducts } from './api.js';
import { addToCart, removeFromCart } from './cart.js';


// ================= CATEGORY BUTTONS =================
export function renderCategoryButtons(categories) {
  elements.categoryContainer.innerHTML = "";

  // All button
  const allBtn = document.createElement("button");
  allBtn.innerText = "All";
  allBtn.className =
    "category-btn bg-primary text-white border border-primary px-6 py-2 rounded-full text-sm font-bold";
  allBtn.onclick = () => fetchProducts(null);

  elements.categoryContainer.appendChild(allBtn);

  // Category buttons
  categories.forEach(cat => {
    const btn = document.createElement("button");
    btn.innerText = cat;
    btn.className =
      "category-btn bg-white text-gray-600 border border-gray-300 px-6 py-2 rounded-full text-sm font-bold";
    btn.onclick = () => fetchProducts(cat);

    elements.categoryContainer.appendChild(btn);
  });
}


// ================= PRODUCT GRID =================
export function renderProducts(products) {
  elements.productsGrid.innerHTML = products.map(product => `
    <div class="bg-white rounded-xl shadow-md p-5 flex flex-col">
      <img src="${product.image}" class="h-40 object-contain mb-4">

      <h3 class="font-bold text-sm mb-2">${product.title}</h3>

      <p class="text-primary font-bold mb-4">$${product.price}</p>

      <div class="grid grid-cols-2 gap-2 mt-auto">
        <button onclick="openProductModal(${product.id})"
          class="border py-2 rounded text-xs font-bold">
          Details
        </button>

        <button onclick="addToCart(${product.id})"
          class="bg-primary text-white py-2 rounded text-xs font-bold">
          Add to Cart
        </button>
      </div>
    </div>
  `).join("");
}


// ================= CART UI =================
export function updateCartUI() {
  if (elements.cartCountEl)
    elements.cartCountEl.innerText = cart.length;

  if (cart.length === 0) {
    elements.cartItemsContainer.innerHTML =
      `<p class="text-center text-gray-400">Cart is empty</p>`;
    elements.cartTotalEl.innerText = "$0.00";
    return;
  }

  let total = 0;

  elements.cartItemsContainer.innerHTML = cart.map(item => {
    total += item.price;

    return `
      <div class="flex gap-3 items-center mb-3">
        <img src="${item.image}" class="w-12 h-12 object-contain">
        <div class="flex-1">
          <h4 class="text-xs font-bold">${item.title}</h4>
          <p class="text-primary">$${item.price}</p>
        </div>
        <button onclick="removeFromCart(${item.id})">
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>
    `;
  }).join("");

  elements.cartTotalEl.innerText = `$${total.toFixed(2)}`;
}


// ================= PRODUCT MODAL =================
window.openProductModal = function (id) {
  const product = allProducts.find(p => p.id === id);
  if (!product || !elements.productModal) return;

  document.getElementById('modal-img').src = product.image;
  document.getElementById('modal-category').innerText = product.category;
  document.getElementById('modal-title').innerText = product.title;
  document.getElementById('modal-desc').innerText = product.description;
  document.getElementById('modal-price').innerText = `$${product.price}`;
  document.getElementById('modal-rating').innerHTML =
    `<i class="fa-solid fa-star text-yellow-400"></i> ${product.rating.rate}`;

  document.getElementById('modal-add-btn').onclick = () => {
    addToCart(product.id);
    closeProductModal();
  };

  elements.productModal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
};


// ================= CLOSE MODAL =================
window.closeProductModal = function () {
  elements.productModal.classList.add("hidden");
  document.body.style.overflow = "auto";
};
