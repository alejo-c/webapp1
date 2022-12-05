let cajero_form = document.getElementById('cajero_form')

cajero_form.addEventListener('submit', (e) => {
	e.preventDefault()
})

console.log(dinero_input)

let retirar = () => {
	let dinero_input = document.getElementById('dinero_input')
	let retiro_list = document.getElementById('retiro_list')
	let msg = document.getElementById('msg')

	let dinero = dinero_input.value
	let billetes = []

	clearList(retiro_list)

	if (dinero % 5000 != 0) {
		msg.innerText = 'La cantidad de dinero debe ser divisible entre $5.000'
		return
	}

	msg.innerText = 'Retiro Completado. Billetes:'

	for (let i = 0; i < dinero; i++) {
		if (dinero - 50000 >= 0) {
			billetes.push('$50000')
			dinero -= 50000
		} else if (dinero - 20000 >= 0) {
			billetes.push('$20000')
			dinero -= 20000
		} else if (dinero - 10000 >= 0) {
			billetes.push('$10000')
			dinero -= 10000
		}
	}

	addListItemsText(billetes)
}

let clearList = (list) => {
	var child = list.lastElementChild
	while (child) {
		list.removeChild(child)
		child = e.lastElementChild
	}
}

let addListItemsText = (items) => {
	for (const text of items) {
		let li = document.createElement('li')
		li.appendChild(document.createTextNode(text))
		retiro_list.appendChild(li)
	}
}