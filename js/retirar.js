const cajeroForm = document.getElementById('cajero_form')
const retiroList = document.getElementById('retiro_list')
const text_msg = document.getElementById('text_msg')

// Prevenir la recarga de la pagina al enviar (submit) el formulario
cajeroForm.addEventListener('submit', e => e.preventDefault())
// Vaciar la lista de retiro de dinero y el mensaje de texto
cajeroForm.addEventListener('reset', () => reset())

const retirar = () => {
	// Tipos de billetes que se pueden retirar 
	const billetes = [50000, 20000, 10000, 5000],
		// Arreglo que almacena la cantidad y el tipo de billetes retirados
		retiroTotal = []
	// Dinero a retirar
	let dinero = document.getElementById('dinero_input').value

	// Vaciar la lista de retiro de dinero ante un nuevo retiro
	clearList(retiroList)

	// Para cada billete de mayor a menor denominación
	for (const billete of billetes) {
		// Cantidad de billetes de un tipo que puedo retirar
		let cantidad = Math.floor(dinero / billete)
		// Si cantidad > 0 -> true, es posible retirar billetes
		// Si cantidad == 0 -> false
		if (cantidad) {
			retiroTotal.push(`${cantidad} x ${billete}`)
			// Despues de retirar, ahora el dinero ahora es el residuo de la división
			dinero %= billete
		}
		// Si no hay dinero no se evaluan los demas billetes y cierra el ciclo
		if (!dinero) break
	}

	text_msg.innerText = 'Retiro Completado. Billetes:'
	// Agregar los billetes del arreglo a la lista
	addListItems(retiroList, retiroTotal)
}

const reset = () => {
	text_msg.innerText = ''
	clearList(retiroList)
}

const clearList = list => {
	// Mientras el ultimo elemento de la lista no sea nulo
	while (child = list.lastElementChild)
		// Eliminar el último elemento de la lista
		list.removeChild(child)
}

const addListItems = (list, items) =>
	// Para cada uno de los elementos de la lista (html)
	items.forEach(html =>
		// Concatenar un <li> al HTML interno de la lista
		list.innerHTML += `<li>${html}</li>`
	)