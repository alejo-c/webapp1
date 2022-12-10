document.addEventListener('DOMContentLoaded', () => {
	// Query para obtener los <a> que redirigen a la pagina actual
	const query = 'a[href="' + location.pathname + '"]'

	// Cambiar la clase de la etiqueta <a> por 'active'
	for (const link of document.querySelectorAll(query))
		link.className = 'active'
})