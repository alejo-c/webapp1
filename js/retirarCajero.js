let cajero_form = document.getElementById('cajero_form')

cajero_form.addEventListener('submit', (e) => {
	e.preventDefault()
})

let retirar = () => {
	let text_msg = document.getElementById('text_msg')
	let dinero = document.getElementById('dinero_input').value
	let retiro_total = []
	let billetes = [50000, 20000, 10000, 5000]

	clearList(document.getElementById('retiro_list'))

	if (dinero % 5000) {
		text_msg.innerText = 'La cantidad de dinero debe ser divisible entre $5.000'
		return
	}

	billetes.forEach(billete => {
		let cant = Math.floor(dinero / billete)
		if (cant) {
			retiro_total.push(`${cant} x ${billete}`)
			dinero %= billete
		}
		if (!dinero) return
	})

	text_msg.innerText = 'Retiro Completado. Billetes:'
	addListItemsText(retiro_total)
}

let clearList = (list) => {
	let child = list.lastElementChild
	while (child) {
		list.removeChild(child)
		child = list.lastElementChild
	}
}

let addListItemsText = (items) => {
	for (const text of items) {
		let li = document.createElement('li')
		li.innerHTML = text
		retiro_list.appendChild(li)
	}
}
