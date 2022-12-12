const tierraForm = getById('tierra_form')

// Prevenir la recarga de la pagina al enviar (submit) el formulario
addEvent(tierraForm, 'submit', e => e.preventDefault())
addEvent(tierraForm, 'reset', () => setResultText(''))

const calcularRecorridoTierra = () => {
	setResultText('')

	// Variables del Sistema Horario [H]
	let horasH = getById('horas_input').value, // string
		minutosH = getById('minutos_input').value, // string
		segundosH = getById('segundos_input').value // string

	// Si todos los valores de las cadenas de caracteres son nulos, detener la función
	if (!horasH && !minutosH && !segundosH)
		return setResultText('Error: Ingrese algún valor')

	// Si la cadena de caracteres tiene algún caracter, convertirlo a entero
	// Si está vacía se le asina cero (0)
	horasH = horasH ? parseInt(horasH) : 0 // int
	minutosH = minutosH ? parseInt(minutosH) : 0 // int
	segundosH = segundosH ? parseInt(segundosH) : 0 // int

	// Si se ingreso un valor de 24 horas ...
	// ... y los minutos o segundos son mayores a 0, detener la función
	if (horasH == 24 && (minutosH || segundosH))
		return setResultText('Error: El valor máximo es de 24 horas')

	// Grados Sistema Decimal [D] (1 hora = 15 grados)
	// Convertir los minutos y segundos a horas ...
	// ... sumar y luego convertir a grados
	let gradosD = (horasH + minutosH / 60 + segundosH / 3600) * 15

	// Variables del Sistema Sexagesimal [S]
	let gradosS = Math.floor(gradosD), // Parte entera de gradosD
		aux = (gradosD - gradosS) * 60, // Parte no entera de gradosD convertida a minutos
		minutosS = Math.floor(aux), // Minutos en valor entero
		segundosS = Math.round((aux - minutosS) * 60) // Segundos en valor entero

	setResultText('',
		`Grados: ${gradosS}°`,
		`Minutos: ${minutosS}'`,
		`Segundos: ${segundosS}''`
	)
}

const setResultText = (err_msg, grados = '', minutos = '', segundos = '') => {
	getById('err_msg').innerText = err_msg
	getById('grados_ss').innerText = grados
	getById('minutos_ss').innerText = minutos
	getById('segundos_ss').innerText = segundos
}