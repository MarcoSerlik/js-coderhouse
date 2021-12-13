
// Consumo de una API de paises para crear los elementos <option> del select de mi form, y también genero la validación del local storage para ver si ya hay datos del usuario dentro de la web, tuve que hacerlo todo acá, porque si había dos funciones de window.onload empezaba a fallar.

window.onload = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then((resp) => resp.json())
        .then((data) => {

            data.forEach((pais) => {
                const paisForm = document.getElementById('paisForm')

                const optionPais = document.createElement('option')

                optionPais.setAttribute("value", `${pais.name.common}`);

                optionPais.innerHTML = `${pais.name.common}`

                paisForm.appendChild(optionPais)
            });

        })

    const usuario = JSON.parse(localStorage.getItem('usuario'))

    if ((!usuario.nombre == "") && (!usuario.email == "") && (!usuario.telefono == "") && (!usuario.pais == "") && (!usuario.serviciosContratados == [])) {
        Swal.fire({
            title: '¡Bienvenido de nuevo!',
            text: '¡Usted se fue sin confirmar la compra! Pero no se preocupe, tenemos su carrito listo para que pueda adquirir los servicios.',
            icon: 'info',
            confirmButtonText: 'Genial!'
        })

        primerForm.classList.add("d-none")
        checkOut.classList.remove("d-none")
        mostrarCheckOut()
    }

}