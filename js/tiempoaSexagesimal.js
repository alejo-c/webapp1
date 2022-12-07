let tierra_form = document.getElementById('tierra_form')

tierra_form.addEventListener('submit', (e) => {
	e.preventDefault()
})

let sistemaHorarioaSistemaSexagesimal = () => {
	// Sistema Horario
	let horas_h = document.getElementById('horas_input').value
	let minutos_h = document.getElementById('minutos_input').value
	let segundos_h = document.getElementById('segundos_input').value

	if (!horas_h && !minutos_h && !segundos_h)
		return

	horas_h = horas_h ? parseInt(horas_h) : 0
	minutos_h = minutos_h ? parseInt(minutos_h) : 0
	segundos_h = segundos_h ? parseInt(segundos_h) : 0

	if (horas_h == 24 && (minutos_h || segundos_h))
		return

	// Grados sistema decimal
	// 1 hora = 15 grados
	let grados_d = (horas_h + minutos_h / 60 + segundos_h / 3600) * 15

	// Sistema Sexagesimal
	let grados_s = Math.floor(grados_d)
	let aux = (grados_d - grados_s) * 60
	let minutos_s = Math.floor(aux)
	let segundos_s = Math.floor((aux - minutos_s) * 60)

	if (segundos_s >= 60) {
		minutos_s += 1
		segundos_s -= 1
	}
	if (minutos_s >= 60) {
		grados_s += 1
		minutos_s -= 1
	}

	document.getElementById('grados_ss').innerText = grados_s
	document.getElementById('minutos_ss').innerText = minutos_s
	document.getElementById('segundos_ss').innerText = segundos_s
}