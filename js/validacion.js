
/*-------------------------------------------- Validación ---------------------------------------------*/


// Validar la selección de servicios para poder pasar al CheckOut

const validarSelecServicios = () => {
    if (carritoServicios.length == 0) {

        Swal.fire({
            title: 'Espere!',
            text: 'Antes de continuar necesitamos que seleccione algún servicio para adquirir.',
            icon: 'error',
            confirmButtonText: 'OK'
        });

    } else {

        segundoForm.classList.add("d-none")
        checkOut.classList.remove("d-none")

    }
}

/*----------------------------------------------------------------------------------------------------*/

// Validacion de formularios.

const form = document.getElementById('formulario')

const nombreUsuario = document.getElementById("nombreForm")

const emailUsuario = document.getElementById("emailForm")

const numeroUsuario = document.getElementById("numeroForm")

const paisUsuario = document.getElementById("paisForm")

let nombreValor = ""

let emailValor = ""

let numeroValor = ""

let paisValor = ""

form.addEventListener("submit", (e) => {
    e.preventDefault()

    validarCampos()
})

const validarCampos = () => {
    nombreValor = nombreUsuario.value

    emailValor = emailUsuario.value.trim()

    numeroValor = numeroUsuario.value.trim()

    paisValor = paisUsuario.value

    let nombreDatoCorrecto = nombreCorrecto()

    let emailDatoCorrecto = emailCorrecto()

    let numeroDatoCorrecto = numeroCorrecto()

    let paisDatoCorrecto = paisCorrecto()

    if ((nombreDatoCorrecto == true) && (emailDatoCorrecto == true) && (numeroDatoCorrecto == true) && (paisDatoCorrecto == true)) {

        primerForm.classList.add("d-none")
        segundoForm.classList.remove("d-none")
        nombreValor = nombreUsuario.value

        emailValor = emailUsuario.value.trim()

        numeroValor = numeroUsuario.value.trim()

        paisValor = paisUsuario.value

        submitForm()
    }
}


//Validaciond de nombre
const nombreCorrecto = () => {

    if (nombreValor === "") {
        validacionFalla(nombreUsuario, 'Completá el campo.')
    } else if (nombreValor.length < 2 || nombreValor.length > 14) {
        validacionFalla(nombreUsuario, 'Ingresá un valor válido.')
    } else {
        validacionCorrecta(nombreUsuario)
        return true
    }
}

// Validacion de Email
const emailCorrecto = () => {

    if (emailValor === "") {

        validacionFalla(emailUsuario, 'Completá el campo.')

    } else if (!validaEmail(emailValor)) {

        validacionFalla(emailUsuario, 'El e-mail no es válido.')
    } else {

        validacionCorrecta(emailUsuario)
        return true
    }
}

// Validacion de numero
const numeroCorrecto = () => {
    if ((numeroValor.length > 5) && (numeroValor > 14)) {
        validacionCorrecta(numeroUsuario)
        return true
    } else if (numeroValor === "") {
        validacionFalla(numeroUsuario, 'Completá el campo.')
    }
    else if (numeroValor < 0) {
        validacionFalla(numeroUsuario, 'Ingresá un valor válido.')
    }
    else {
        validacionFalla(numeroUsuario, 'Ingresá un valor válido.')
    }
}

// Validacion de pais
const paisCorrecto = () => {
    if (paisValor == "Seleccione") {
        validacionFalla(paisUsuario, 'Ingresá un valor válido.')
    }
    else {
        validacionCorrecta(paisUsuario)
        return true
    }
}

const validacionCorrecta = (input) => {
    const formControl = input.parentElement
    const aviso = formControl.querySelector('p')
    aviso.innerText = ""

    formControl.classList.remove('form-novalido')
}

const validacionFalla = (input, msje) => {
    const formControl = input.parentElement
    const aviso = formControl.querySelector('p')
    aviso.innerText = msje

    formControl.classList.add('form-novalido')
}

// Chequeo si el email es valido, googleando encontre esto que refiere a expresiones regulares. Algo para estudiar mas después.
const validaEmail = (email) => {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
