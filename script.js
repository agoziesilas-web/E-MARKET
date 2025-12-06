// Default admin login
localStorage.setItem("admin", JSON.stringify({
    email: "oskonbo568@gmail.com",
    password: "333222osK"
}));

// Products
let products = JSON.parse(localStorage.getItem("products")) || [
    {id:1, name:"Wireless Headphones", price:49.99, image:"https://images.unsplash.com/photo-1518443952240-9ac908e545b4?auto=format&fit=crop&w=600&q=80", description:"High-quality Bluetooth wireless headphones."},
    {id:2, name:"Smartwatch Series 5", price:89.99, image:"https://images.unsplash.com/photo-1519744346363-594bdf1f1e9c?auto=format&fit=crop&w=600&q=80", description:"Waterproof smartwatch with fitness tracking."},
    {id:3, name:"Portable Bluetooth Speaker", price:39.99, image:"https://images.unsplash.com/photo-1585386959984-a41552231693?auto=format&fit=crop&w=600&q=80", description:"Loud speaker with 8-hour battery life."},
    {id:4, name:"RGB Gaming Mouse", price:29.99, image:"https://images.unsplash.com/photo-1616576680269-5e90f5f5ff58?auto=format&fit=crop&w=600&q=80", description:"Ergonomic RGB gaming mouse."},
    {id:5, name:"Aluminum Laptop Stand", price:19.99, image:"https://images.unsplash.com/photo-1587825140708-5dd8c5b4c31c?auto=format&fit=crop&w=600&q=80", description:"Adjustable aluminum laptop stand."}
];

localStorage.setItem("products", JSON.stringify(products));

// Load products to homepage
function loadProducts() {
    let html = "";
    for (let p of products) {
        html += `
        <div class="card">
            <img src="${p.image}" alt="${p.name}">
            <h3>${p.name}</h3>
            <p>$${p.price}</p>
            <button onclick="viewProduct(${p.id})">View Product</button>
            <button onclick="addToCart(${p.id})">Add to Cart</button>
        </div>`;
    }
    document.getElementById("product-list").innerHTML = html;
}
window.onload = loadProducts;

// Add to Cart
function addToCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let product = products.find(p => p.id === id);
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(product.name + " added to cart!");
}

// View product (redirect)
function viewProduct(id) {
    localStorage.setItem("viewingProduct", id);
    window.location.href = "product.html";
}

// Search
document.getElementById("searchBar").addEventListener("input", function(){
    let keyword = this.value.toLowerCase();
    let filtered = products.filter(p => p.name.toLowerCase().includes(keyword));
    let html = "";
    for (let p of filtered) {
        html += `
        <div class="card">
            <img src="${p.image}" alt="${p.name}">
            <h3>${p.name}</h3>
            <p>$${p.price}</p>
            <button onclick="viewProduct(${p.id})">View Product</button>
            <button onclick="addToCart(${p.id})">Add to Cart</button>
        </div>`;
    }
    document.getElementById("product-list").innerHTML = html;
});
<script
  async="async"
  data-cfasync="false"
  src="//pl28200269.effectivegatecpm.com/a6f2cabb4f1865b55720bca12f024506/invoke.js"
></script>
<div id="container-a6f2cabb4f1865b55720bca12f024506"></div>
