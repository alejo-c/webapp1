const operacionForm = document.getElementById('suma_form')

operacionForm.addEventListener('submit', e => e.preventDefault())
operacionForm.addEventListener('reset', () => setResultText())

const operar = () => {
	setResultText()

	// Variables del Sistema Horario [H]
	let horasH = document.getElementById('horas_input').value, // string
		minutosH = document.getElementById('minutos_input').value, // string
		segundosH = document.getElementById('segundos_h_input').value, // string
		// Segundos adicionales [A] del Sistema Decimal [D]
		segundosAD = parseInt(document.getElementById('segundos_d_input').value), // int
		// Valor booleano que indica si se seleccionó la opción de restar
		sub_radio = document.getElementById('sub_radio').checked // boolean

	// Si la cadena de caracteres tiene algún caracter, convertirlo a entero
	// Si está vacía se le asigna cero (0)
	horasH = horasH ? parseInt(horasH) : 0 // int
	minutosH = minutosH ? parseInt(minutosH) : 0 // int
	segundosH = segundosH ? parseInt(segundosH) : 0 // int

	if (sub_radio && segundosAD > horasH * 3600 + minutosH * 60 + segundosH)
		return setResultText('Error: No es posible restar, el resultado es negativo')

	// Convertir segundos adicionales del sistema decimal ...
	// ... A valores del sistema horario [H]
	let aux1 = segundosAD / 3600, // Segundos decimales convertidos a horas
		horasAH = Math.floor(aux1), // Parte entera de horas
		aux2 = (aux1 - horasAH) * 60, // Parte no entera de horas convertida a minutos
		minutosAH = Math.floor(aux2), // Minutos en valor entero
		segundosAH = Math.round((aux2 - minutosAH) * 60) // Segundos en valor entero

	// Sumar/Restar valores adicionales, si se eligío la opción ... 
	// ... de restar entonces el valor adicional se multiplica por -1
	horasH += horasAH * (sub_radio ? -1 : 1)
	minutosH += minutosAH * (sub_radio ? -1 : 1)
	segundosH += segundosAH * (sub_radio ? -1 : 1)

	// Corregir valores si los segundos o minutos están fuera del rango
	if (segundosH >= 60) {
		segundosH -= 60
		minutosH++
	}
	if (minutosH >= 60) {
		minutosH -= 60
		horasH++
	}
	if (segundosH < 0) {
		segundosH += 60
		minutosH--
	}
	if (minutosH < 0) {
		minutosH += 60
		horasH--
	}

	setResultText('',
		`Horas: ${horasH}h`,
		`Minutos: ${minutosH}m`,
		`Segundos: ${segundosH}s`
	)
}

const setResultText = (err_msg = '', grados = '', minutos = '', segundos = '') => {
	document.getElementById('err_msg').innerText = err_msg
	document.getElementById('horas_t').innerText = grados
	document.getElementById('minutos_t').innerText = minutos
	document.getElementById('segundos_t').innerText = segundos
}
