const cajeroForm = document.getElementById('cajero_form')
const retiroList = document.getElementById('retiro_list')

cajeroForm.addEventListener('submit', e => e.preventDefault())
cajeroForm.addEventListener('reset', () => clearList(retiroList))

const retirar = () => {
	const billetes = [50000, 20000, 10000, 5000],
		retiroTotal = []
	let dinero = document.getElementById('dinero_input').value

	clearList(retiroList)

	for (const billete of billetes) {
		let cant = Math.floor(dinero / billete)
		if (cant) {
			retiroTotal.push(`${cant} x ${billete}`)
			dinero %= billete
		}
		if (!dinero) break
	}

	document.getElementById('text_msg').innerText = 'Retiro Completado. Billetes:'
	addListItems(retiroList, retiroTotal)
}

const clearList = list => {
	while (child = list.lastElementChild)
		list.removeChild(child)
}

const addListItems = (list, items) =>
	items.forEach(html =>
		list.innerHTML += `<li>${html}</li>`
	)