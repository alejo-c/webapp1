const cajeroForm = document.getElementById('cajero_form'),
	dinero_input = document.getElementById('dinero_input'),

	stepUpButton = document.getElementById('step_up_button'),
	stepDownButton = document.getElementById('step_down_button'),

	retiroList = document.getElementById('retiro_list'),
	textMsg = document.getElementById('text_msg')

// Prevenir la recarga de la pagina al enviar (submit) el formulario
cajeroForm.addEventListener('submit', e => e.preventDefault())
// Vaciar la lista de retiro de dinero y el mensaje de texto
cajeroForm.addEventListener('reset', () => reset())

stepUpButton.addEventListener('click', () => dinero_input.stepUp())
stepDownButton.addEventListener('click', () => dinero_input.stepDown())

const retirar = () => {
	// Vaciar la lista de retiro de dinero ante un nuevo retiro
	clearList(retiroList)

	// Tipos de billetes que se pueden retirar 
	const billetes = [50000, 20000, 10000, 5000],
		// Arreglo que almacena la cantidad y el tipo de billetes retirados
		retiroTotal = []
	// Dinero a retirar
	let dinero = dinero_input.value

	// Para cada billete de mayor a menor denominación
	for (const billete of billetes) {
		// Cantidad de billetes de un tipo que se puede retirar
		let cantidad = Math.floor(dinero / billete)
		// Si cantidad > 0 -> true, es posible retirar billetes
		// Si cantidad == 0 -> false
		if (cantidad) {
			retiroTotal.push(`${cantidad} x ${billete}`)
			// Despues de retirar, ahora el dinero es el residuo de la división
			dinero %= billete
		}
		// Si no hay dinero no se evaluan los demas billetes y cierra el ciclo
		if (!dinero) break
	}

	textMsg.innerText = 'Retiro Completado. Billetes:'
	// Agregar los billetes del arreglo a la lista
	addListItems(retiroList, retiroTotal)
}

const reset = () => {
	textMsg.innerText = ''
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