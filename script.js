const products = [
	{
		id: 1,
		name: "Neumático Pirelli",
		category: "Neumáticos",
		price: 120,
		description: "Alta durabilidad y rendimiento",
		image: "assets/neumatico.png",
	},
	{
		id: 2,
		name: "Pastillas de Freno",
		category: "Frenos",
		price: 30,
		description: "Seguras y confiables",
		image: "assets/frenos.png",
	},
	{
		id: 3,
		name: "Aceite para Motor",
		category: "Motor",
		price: 15,
		description: "Aceite de alta calidad",
		image: "assets/motor.png",
	},
	{
		id: 4,
		name: "Discos de Freno",
		category: "Frenos",
		price: 70,
		description: "Resistentes y duraderos",
		image: "assets/frenos.png",
	},
	{
		id: 5,
		name: "Filtro de Aire",
		category: "Motor",
		price: 25,
		description: "Filtración efectiva",
		image: "assets/filtros.png",
	},
	{
		id: 6,
		name: "Neumático Goodyear",
		category: "Neumáticos",
		price: 110,
		description: "Calidad superior",
		image: "assets/neumatico.png",
	},
];

let cart = [];
let displayedProducts = products;

function displayProducts(items) {
	const productContainer = document.getElementById("product-container");
	productContainer.innerHTML = "";

	items.forEach((product) => {
		const productCard = document.createElement("div");
		productCard.classList.add("product-card");
		productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="price">${product.price} €</p>
            <p>${product.description}</p>
            <button onclick="addToCart(${product.id})">Agregar al Carrito</button>
        `;
		productContainer.appendChild(productCard);
	});
}

function filterCategory(category) {
	displayedProducts =
		category === "Todos"
			? products
			: products.filter((p) => p.category === category);
	displayProducts(displayedProducts);
}

document.getElementById("search-input").addEventListener("input", (e) => {
	const searchText = e.target.value.toLowerCase();
	const filteredProducts = displayedProducts.filter((p) =>
		p.name.toLowerCase().includes(searchText)
	);
	displayProducts(filteredProducts);
});

function addToCart(productId) {
	const product = products.find((p) => p.id === productId);
	cart.push(product);
	updateCart();
}

function updateCart() {
	const cartCount = document.getElementById("cart-count");
	const cartTotal = document.getElementById("cart-total");

	cartCount.textContent = cart.length;
	cartTotal.textContent =
		cart.reduce((total, product) => total + product.price, 0).toFixed(2) + " €";
}

displayProducts(products);
