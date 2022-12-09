const tierraForm = document.getElementById('tierra_form')

tierraForm.addEventListener('submit', e => e.preventDefault())
tierraForm.addEventListener('reset', () => cambiarTexto())

const calcularRecorridoTierra = () => {
	// Sistema Horario
	let horasH = document.getElementById('horas_input').value,
		minutosH = document.getElementById('minutos_input').value,
		segundosH = document.getElementById('segundos_input').value

	if (!horasH && !minutosH && !segundosH) return

	horasH = horasH ? parseInt(horasH) : 0
	minutosH = minutosH ? parseInt(minutosH) : 0
	segundosH = segundosH ? parseInt(segundosH) : 0

	if (horasH == 24 && (minutosH || segundosH)) return

	// Grados sistema decimal (1 hora = 15 grados)
	let gradosD = (horasH + minutosH / 60 + segundosH / 3600) * 15

	// Sistema Sexagesimal
	let gradosS = Math.floor(gradosD),
		aux = (gradosD - gradosS) * 60,
		minutosS = Math.floor(aux),
		segundosS = Math.floor((aux - minutosS) * 60)

	if (segundosS >= 60) {
		segundosS = 0
		minutosS += segundosS - 60
	}
	if (minutosS >= 60) {
		minutosS = 0
		gradosS += minutosS - 60
	}

	cambiarTexto(
		`Grados: ${gradosS}°`,
		`Minutos: ${minutosS}'`,
		`Segundos: ${segundosS}''`
	)
}

const cambiarTexto = (grados = '', minutos = '', segundos = '') => {
	document.getElementById('grados_ss').innerText = grados
	document.getElementById('minutos_ss').innerText = minutos
	document.getElementById('segundos_ss').innerText = segundos
}