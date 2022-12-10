let operacionForm = document.getElementById('suma_form')

operacionForm.addEventListener('submit', e => e.preventDefault())
operacionForm.addEventListener('reset', () => cambiarTexto())

const operar = () => {
	// Variables del Sistema Horario [H]
	let horasH = document.getElementById('horas_input').value, // string
		minutosH = document.getElementById('minutos_input').value, // string
		segundosH = document.getElementById('segundos_h_input').value, // string
		// Segundos adicionales [A] del Sistema Decimal [D]
		segundosAD = document.getElementById('segundos_d_input').value, // string
		// Valor booleano que indica si se seleccionó la opción de restar
		sub_radio = document.getElementById('sub_radio').checked // boolean

	// Si la cadena de caracteres tiene algún caracter, convertirlo a entero
	// Si está vacía se le asina cero (0)
	horasH = horasH ? parseInt(horasH) : 0 // int
	minutosH = minutosH ? parseInt(minutosH) : 0 // int
	segundosH = segundosH ? parseInt(segundosH) : 0 // int

	// Convertir segundos adicionales del sistema decimal ...
	// ... A valores del sistema horario [H]
	let aux1 = segundosAD / 3600, // Segundos decimales convertidos a horas
		horasAH = Math.floor(aux1), // Parte entera de horas
		aux2 = (aux1 - horasAH) * 60, // Parte no entera de horas convertida a minutos
		minutosAH = Math.floor(aux2), // Minutos en valor entero
		segundosAH = Math.round((aux2 - minutosAH) * 60) // Segundos en valor entero

	// if (segundosAH >= 60) {
	// 	segundosAH -= 60
	// 	minutosAH += segundosAH - 59
	// }
	// if (minutosAH >= 60) {
	// 	minutosAH -= 60
	// 	grados += minutosAH - 59
	// }

	// Sumar/Restar valores adicionales, si se eligío la opción ... 
	// ... de restar entonces el valor adicional se multiplica por -1
	horasH += horasAH * sub_radio ? -1 : 1
	minutosH += minutosAH * sub_radio ? -1 : 1
	segundosH += segundosAH * sub_radio ? -1 : 1

	// Corregir valores si en la resta el resultado fue negativo
	if (segundosH < 0) {
		segundosH += 60
		minutosH -= Math.round(segundosH / 60)
	}
	if (minutosH < 0) {
		minutosH += 60
		horasH -= Math.round(minutosH / 60)
	}

	cambiarTexto(
		`Horas: ${horasH}h`,
		`Minutos: ${minutosH}m`,
		`Segundos: ${segundosH}s`
	)
}

const cambiarTexto = (grados = '', minutos = '', segundos = '') => {
	document.getElementById('horas_t').innerText = grados
	document.getElementById('minutos_t').innerText = minutos
	document.getElementById('segundos_t').innerText = segundos
}