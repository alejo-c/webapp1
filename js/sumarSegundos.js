let suma_form = document.getElementById('suma_form')

suma_form.addEventListener('submit', (e) => {
	e.preventDefault()
})

let sumarSegundos = () => {
	let horas_input = document.getElementById('horas_input').value
	let minutos_input = document.getElementById('minutos_input').value
	let segundos_h_input = document.getElementById('segundos_h_input').value
	let segundos_d_input = document.getElementById('segundos_d_input').value

	let aux1 = segundos_d_input / 3600
	let hor = Math.round(aux1)
	let aux2 = (aux1 - hor) * 60
	let min = Math.round(aux2)
	let seg = Math.round((aux2 - min) * 60)

	document.getElementById('horas_t').innerText = parseInt(horas_input) + hor
	document.getElementById('minutos_t').innerText = parseInt(minutos_input) + min
	document.getElementById('segundos_t').innerText = parseInt(segundos_h_input) + seg
}