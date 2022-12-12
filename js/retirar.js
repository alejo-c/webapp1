const cajeroForm = getById('cajero_form'),
	dinero_input = getById('dinero_input'),
	retiroList = getById('retiro_list')

// Prevenir la recarga de la pagina al enviar (submit) el formulario
addEvent(cajeroForm, 'submit', e => e.preventDefault())
// Vaciar la lista de retiro de dinero y el mensaje de texto
addEvent(cajeroForm, 'reset', () => reset())

addEvent(getById('step_up_btn'), 'click', () => dinero_input.stepUp())
addEvent(getById('step_down_btn'), 'click', () => dinero_input.stepDown())

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
			retiroTotal.push(`$${billete / 1000}.000 x ${cantidad}`)
			// Despues de retirar, ahora el dinero es el residuo de la división
			dinero %= billete
		}
		// Si no hay dinero no se evaluan los demas billetes y cierra el ciclo
		if (!dinero) break
	}

	cambiarTexto('Retiro Completado. Billetes:')
	// Agregar los billetes del arreglo a la lista
	addListItems(retiroList, retiroTotal)
}

const cambiarTexto = text => getById('text_msg').innerText = text

const reset = () => {
	cambiarTexto('')
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