// Obtener categoría seleccionada del almacenamiento local
const selectedCategory = localStorage.getItem("selectedCategory");

// Filtrar productos en función de la categoría seleccionada
function loadProductDetails() {
	// Aquí puedes cargar los datos del producto filtrado
	if (selectedCategory === "Neumáticos") {
		// Mostrar detalles del producto específico de neumáticos
		// Implementa la lógica para mostrar los datos del producto de esta categoría
	}
}

// Llamar a la función para cargar detalles del producto
loadProductDetails();
