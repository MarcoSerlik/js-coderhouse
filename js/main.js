
/*---------------------------------------------- Declaracion de variables ----------------------------------------------*/

// Elementos contenedores.

const primerForm = document.getElementById("primerForm")

const segundoForm = document.getElementById("segundoForm")

const checkOut = document.getElementById("checkOut")

const contenedorCards = document.getElementById("contenedorCards")

const serviciosCheckOut = document.getElementById("serviciosCheckOut")

const precioFinal = document.getElementById("precioFinal")

// Botones de siguiente o atras. 

const botonesSegForm = document.getElementById("botonesSegForm")

const botonSubmit = document.getElementById("firstSubmit")

const botonSegSubmit = document.getElementById("botonSegSig")

const botonFirstAtras = document.getElementById("botonFirstAtras")

const botonCheckOutAtras = document.getElementById("botonCheckOutAtras")

const botonCheckOutFinal = document.getElementById("botonCheckOutFinal")

// Botones filtros

const filtroTodo = document.getElementById("filtroTodo")

const filtroDiseño = document.getElementById("filtroDiseño")

const filtroDesarrollo = document.getElementById("filtroDesarrollo")

const filtroMarketing = document.getElementById("filtroMarketing")


// Variables de uso.  

const carritoServicios = []

let precioTotal = 0

let servicios //Esta variable luego va a tener asignada la informacion de mi archivo Data.json

// Creo el objeto usuario que luego será guardado en el localStorage con los valores correspondientes que el usuario ingresó.
const usuario = {
  nombre: "",

  email: "",

  telefono: "",

  pais: "",

  serviciosContratados: []
}

/*---------------------------------------------------- Declaracion de funciones -------------------------------------------*/

//Funcion que se va a activar cuando se haga click en el submit del primer form, haciendo el fetch y creando la estructura html correspondiente.
const submitForm = () => {

  fetch("./js/data.json")
    .then((resp) => resp.json())
    .then((data) => {
      servicios = data
      constructorCardsYBtn(servicios)
    })

}

// Funcion que se llama para mostrar los objetos y botones en la seleccion de los servicios. 

const constructorCardsYBtn = (array) => {

  contenedorCards.innerHTML = ""

  array.forEach((servicios) => {

    const divCard = document.createElement('div')
    divCard.classList.add('card', 'my-3', 'container', 'p-4')

    divCard.innerHTML = `
                      <h4 class="card-title my-2">${servicios.nombre}</h4>
                      <p class="card-text my-3">${servicios.descripcion}</p>
                      <p class="fw-bold"> Precio: $ ${servicios.precio}</p>
  
  
                      <div class="d-flex flex-row justify-content-end">
                        <button id="borrar${servicios.id}" class="btn c__blanco d-flex me-3 btn-borrar">Borrar</button>
                        <button id="contratar${servicios.id}" class="btn c__blanco d-flex btn-agregar">Contratar</button>
                      </div>
                      `

    contenedorCards.append(divCard)

    //Creo variables para ambos botones
    const botonAgregar = document.getElementById(`contratar${servicios.id}`)

    const botonBorrar = document.getElementById(`borrar${servicios.id}`)

    // Agrego boton para contratar el servicio y sumarlo al "carrito" del checkOut.
    botonAgregar.addEventListener('click', () => {
      agregarAlCarrito(servicios.id)
    })

    // Agrego boton para borrar el servicio del "carrito" del CheckOut. 

    botonBorrar.addEventListener('click', () => {
      borrarDelCarrito(servicios.id)
    })
  })
}



// Funcion para mostrar servicios seleccionados en el CheckOut
const mostrarCheckOut = () => {

  serviciosCheckOut.innerHTML = ""

  // Traigo directamente el usuario que almacene en el LocalStorage y lo utilizo para mostrar el ChecckOut.
  const usuarioFinal = JSON.parse(localStorage.getItem('usuario'))

  const carritoServiciosFinal = usuarioFinal.serviciosContratados

  // Selecciono los elementos del DOM para luego asignarle los datos del usuario.
  const contenedorNombre = document.getElementById("contenedorNombre")

  const contenedorEmail = document.getElementById("contenedorEmail")

  const contenedorTelefono = document.getElementById("contenedorTelefono")

  const contenedorPais = document.getElementById("contenedorPais")

  // Asigno los valores para que se muestren en el DOM.
  contenedorNombre.innerText = usuarioFinal.nombre

  contenedorEmail.innerText = usuarioFinal.email

  contenedorTelefono.innerText = usuarioFinal.telefono

  contenedorPais.innerText = usuarioFinal.pais

  // Muestro el carrito final y su precio.
  carritoServiciosFinal.forEach((serv) => {

    const divServicio = document.createElement('div')

    divServicio.classList.add('my-3', 'row', 'p-2', 'rounded', 'border', 'd-flex', 'justify-content-between')

    divServicio.innerHTML = `
                            <h4 class="col-3 my-2 fs-5">${serv.nombre}</h4>
                            <p class="col-3 my-auto text-end"> Precio: <span class="fw-bold"> $ ${serv.precio} </span></p>
                            `

    serviciosCheckOut.appendChild(divServicio)

    precioFinal.innerText = carritoServiciosFinal.reduce((acc, serv) => acc + serv.precio, 0)
  })
}


// Funcion para agregar servicio al carrito. Luego se la asigno al boton correspondiente. 

const agregarAlCarrito = (servId) => {
  const item = servicios.find((serv) => serv.id === servId)

  if (carritoServicios.includes(item)) {

    Toastify({
      text: "Este servicio ya está seleccionado",
      duration: 3000,
      gravity: "bottom",
      position: "right",
      style: {
        background: "linear-gradient(to right, #FF4B2B, #FF416C)",
      },
    }).showToast();

  } else {

    Toastify({
      text: "El servicio se ha seleccionado correctamente.",
      duration: 3000,
      gravity: "bottom",
      position: "right",
      style: {
        background: "linear-gradient(to right, #00f260, #0575e6)",
      },
    }).showToast();
    carritoServicios.push(item)
  }
}

// Funcion para borrar el servicio del carrito. 

const borrarDelCarrito = (servId) => {
  const item = carritoServicios.find((serv) => serv.id === servId)
  const indice = carritoServicios.indexOf(item)

  if (carritoServicios.includes(item)) {

    Toastify({
      text: "El servicio se ha borrado correctamente.",
      duration: 3000,
      gravity: "bottom",
      position: "right",
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      },
    }).showToast();

    // Splice utiliza el indice de la constante de arriba, correspondiente al item a borrar. 
    carritoServicios.splice(indice, 1)
  } else {
    Toastify({
      text: "Este servicio no ha sido seleccionado",
      duration: 3000,
      gravity: "bottom",
      position: "right",
      style: {
        background: "linear-gradient(to right, #FF4B2B, #FF416C)",
      },
    }).showToast();
  }
}

// Funcion para mostrar los valores.


// Funcion para sumar el valor de los servicios y mostrar valor total.

const sumarCarrito = () => {
  carritoServicios.reduce((acc, serv) => acc + serv.precio, 0)

  const total = document.createElement('span')

  total.innerHTML = `$ ${precioTotal}`

  precioFinal.appendChild(precioTotal)
}

/* ------------------------------------------ Llamado a las funciones por eventos ----------------------------------*/


// Boton atras del segundo form: Desaparece el segundo paso del form, aparece el segundo. 
botonFirstAtras.addEventListener("click", () => {
  segundoForm.classList.add("d-none")
  primerForm.classList.remove("d-none")

})

// Boton para pasar del segundo form al Checkout. 
botonSegSubmit.addEventListener("click", () => {
  validarSelecServicios()

  // Guardamos los datos del usuario y sus servicios seleccionados dentro del objeto usuario para luego guardarlo en el local storage (como si fuera una base de datos), y llamar a este usuario en el checkout.

  usuario.nombre = nombreValor.toUpperCase()

  usuario.email = emailValor

  usuario.telefono = numeroValor

  usuario.pais = paisValor

  usuario.serviciosContratados = carritoServicios

  localStorage.setItem('usuario', JSON.stringify(usuario))

  mostrarCheckOut()
})

// Boton para volver atras desde el CheckOut.
botonCheckOutAtras.addEventListener("click", () => {

  // Borro el usuario del LocalStorage para poder actualizar la vista del carrito y sus datos correctamente al volver a ingresar al checkOut.

  localStorage.removeItem('usuario')

  submitForm()

  checkOut.classList.add("d-none")
  segundoForm.classList.remove("d-none")
})

// Boton final.
botonCheckOutFinal.addEventListener("click", () => {
  Swal.fire({
    title: '¡Perfecto!',
    text: 'Pronto nos comunicaremos con usted para empezar a trabajar juntos.',
    icon: 'success',
    confirmButtonText: 'Genial!'
  })
})
