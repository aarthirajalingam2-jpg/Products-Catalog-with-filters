<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Products Catalog with Filters</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 20px;
      background-color: #f4f4f4;
    }

    h1 {
      text-align: center;
      color: #333;
    }

    .filters {
      display: flex;
      justify-content: center;
      gap: 15px;
      margin-bottom: 20px;
    }

    select, input {
      padding: 8px;
      border-radius: 5px;
      border: 1px solid #ccc;
    }

    .product-list {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 15px;
    }

    .product {
      background: #fff;
      border-radius: 10px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
      padding: 15px;
      text-align: center;
    }

    .product img {
      width: 100%;
      height: 150px;
      object-fit: cover;
      border-radius: 8px;
    }

    .product h3 {
      color: #333;
      margin: 10px 0;
    }

    .product p {
      margin: 5px 0;
      color: #777;
    }
  </style>
</head>
<body>
  <h1>🛍️ Products Catalog with Filters</h1>

  <div class="filters">
    <select id="categoryFilter">
      <option value="all">All Categories</option>
      <option value="electronics">Electronics</option>
      <option value="clothing">Clothing</option>
      <option value="grocery">Grocery</option>
    </select>

    <input type="number" id="priceFilter" placeholder="Max Price (₹)" />
    <button onclick="applyFilters()">Apply Filters</button>
  </div>

  <div id="productList" class="product-list"></div>

  <script>
    const products = [
      { name: "Smartphone", category: "electronics", price: 15000, img: "https://via.placeholder.com/200x150?text=Phone" },
      { name: "Laptop", category: "electronics", price: 50000, img: "https://via.placeholder.com/200x150?text=Laptop" },
      { name: "T-Shirt", category: "clothing", price: 800, img: "https://via.placeholder.com/200x150?text=T-Shirt" },
      { name: "Jeans", category: "clothing", price: 1500, img: "https://via.placeholder.com/200x150?text=Jeans" },
      { name: "Rice Bag", category: "grocery", price: 1200, img: "https://via.placeholder.com/200x150?text=Rice" },
      { name: "Milk", category: "grocery", price: 60, img: "https://via.placeholder.com/200x150?text=Milk" },
    ];

    function displayProducts(filteredProducts) {
      const productList = document.getElementById("productList");
      productList.innerHTML = "";

      if (filteredProducts.length === 0) {
        productList.innerHTML = "<p>No products found.</p>";
        return;
      }

      filteredProducts.forEach((product) => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
        productDiv.innerHTML = `
          <img src="${product.img}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p>Category: ${product.category}</p>
          <p>Price: ₹${product.price}</p>
        `;
        productList.appendChild(productDiv);
      });
    }

    function applyFilters() {
      const category = document.getElementById("categoryFilter").value;
      const maxPrice = document.getElementById("priceFilter").value;

      let filtered = products;

      if (category !== "all") {
        filtered = filtered.filter(p => p.category === category);
      }

      if (maxPrice) {
        filtered = filtered.filter(p => p.price <= maxPrice);
      }

      displayProducts(filtered);
    }

    // Display all products on page load
    displayProducts(products);
  </script>
</body>
</html>