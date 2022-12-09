let operacionForm = document.getElementById('suma_form')

operacionForm.addEventListener('submit', e => e.preventDefault())
operacionForm.addEventListener('reset', () => cambiarTexto())

const operar = () => {
	let horasH = document.getElementById('horas_input').value,
		minutosH = document.getElementById('minutos_input').value,
		segundosH = document.getElementById('segundos_h_input').value,
		segundosD = document.getElementById('segundos_d_input').value,
		sub_radio = document.getElementById('sub_radio').checked

	horasH = horasH ? parseInt(horasH) : 0
	minutosH = minutosH ? parseInt(minutosH) : 0
	segundosH = segundosH ? parseInt(segundosH) : 0

	let aux1 = segundosD / 3600,
		horas = Math.round(aux1),
		aux2 = (aux1 - horas) * 60,
		minutos = Math.round(aux2),
		segundos = Math.round((aux2 - minutos) * 60)

	if (segundos >= 60) {
		segundos -= 60
		minutos += segundos - 59
	}
	if (minutos >= 60) {
		minutos -= 60
		grados += minutos - 59
	}

	horas *= sub_radio ? -1 : 1
	minutos *= sub_radio ? -1 : 1
	segundos *= sub_radio ? -1 : 1

	horasH += horas
	minutosH += minutos
	segundosH += segundos

	if (sub_radio) {
		if (segundosH < 0) {
			segundosH += 60
			minutosH -= Math.round(segundosH / 60)
		}
		if (minutosH < 0) {
			minutosH += 60
			horasH -= Math.round(minutosH / 60)
		}
	}

	cambiarTexto(horasH, minutosH, segundosH)
}

const cambiarTexto = (grados = '', minutos = '', segundos = '') => {
	document.getElementById('horas_t').innerText = `Horas: ${grados}h`
	document.getElementById('minutos_t').innerText = `Minutos: ${minutos}m`
	document.getElementById('segundos_t').innerText = `Segundos: ${segundos}s`
}