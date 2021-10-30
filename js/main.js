/* ------------------ Valores  ---------------------------------- */

/*---------------------------------------------- Declaracion de variables ----------------------------------*/

let nombreUsuario = prompt(
  "¡Hola! Bienvenido al formulario de contacto para adquisición de el servicio Dico. \n \n Por favor, para comenzar ingrese su nombre: \n "
).toUpperCase();

let apellidoUsuario = prompt(
  "¡Bienvenido " + nombreUsuario + "! \n \n  Ahora faltaría tu apellido: \n"
).toUpperCase();

let email = prompt(
  "Ahora si, tu nombre es: " +
  nombreUsuario +
  " " +
  apellidoUsuario +
  ".\n \n Ahora faltaría que agregues un mail para que podamos contactarnos con vos:"
);

let serviciosSeleccionados = ""

const carritoServicios = []

let precioFinal = 0


const servicioDisenio = {
  id: 1,
  nombre: "Diseño de tu web",
  descripcion:
    "Diseño de la identidad visual de tu marca y diseño de toda la web para el emprendimiento.",
  precio: 20000
};

const servicioDesarrollo = {
  id: 2,
  nombre: "Desarrollo de tu web",
  descripcion: "Desarrollo de la web para tu emprendimiento.",
  precio: 30000
}

const servicioMarketing = {
  id: 3,
  nombre: "Campaña de Marketing",
  descripcion: "Campaña de Marketing Digital para tu proyecto.",
  precio: 25000
};


/*---------------------------------------------- Declaracion de funciones ----------------------------------*/


function seleccionServicios() {
  serviciosSeleccionados = prompt(
    "¡Perfecto " +
    nombreUsuario +
    "! \n \n Contamos con los sigientes servicios: \n \n. " +
    servicioDisenio.nombre + "            $" + servicioDisenio.precio +
    "\n \n. " +
    servicioDesarrollo.nombre + "            $" + servicioDesarrollo.precio +
    "\n \n. " +
    servicioMarketing.nombre + "            $" + servicioMarketing.precio +
    "\n \n Para seleccionar un servicio, escriba el nombre del servicio:"
  );

  sumarAlCarrito()

}

function sumarAlCarrito() {
  if (serviciosSeleccionados == servicioDisenio.nombre) {
    carritoServicios.push(servicioDisenio.precio);
    confirmarOSumarCarrito()
  }
  else if (serviciosSeleccionados == servicioDesarrollo.nombre) {
    carritoServicios.push(servicioDesarrollo.precio);
    confirmarOSumarCarrito()
  }
  else if (serviciosSeleccionados == servicioMarketing.nombre) {
    carritoServicios.push(servicioMarketing.precio);
    confirmarOSumarCarrito()
  }
  else {
    alert("Ingreso un valor incorrecto");
    seleccionServicios()
  }
}

function confirmarOSumarCarrito() {

  let sumaOConfirma = prompt(
    "Su servicio se agregó correctamente, ¿Quiere agregar otro servicio?\n \n. " +
    servicioDisenio.nombre + "            $" + servicioDisenio.precio +
    "\n \n. " +
    servicioDesarrollo.nombre + "            $" + servicioDesarrollo.precio +
    "\n \n. " +
    servicioMarketing.nombre + "            $" + servicioMarketing.precio +
    "\n \n Para seleccionar un servicio escriba el nombre del servicio, si desea confirmar la compra ingrese CONFIRMAR:")

  if (sumaOConfirma == "CONFIRMAR") {
    sumarCarrito()
  }
  else if (serviciosSeleccionados == servicioDisenio.nombre) {
    carritoServicios.push(servicioDisenio.precio);
    sumarCarrito()
  }
  else if (serviciosSeleccionados == servicioDesarrollo.nombre) {
    carritoServicios.push(servicioDesarrollo.precio);
    sumarCarrito()
  }
  else if (serviciosSeleccionados == servicioMarketing.nombre) {
    carritoServicios.push(servicioMarketing.precio);
    sumarCarrito()
  }
  else {
    alert("Ingreso un valor incorrecto");
    seleccionServicios()
  }

}

function sumarCarrito() {
  for (let i = 0; i < carritoServicios.length; i++) {
    precioFinal += carritoServicios[i]
  }

  alert("Perfecto " + nombreUsuario + "\n\n El precio final del carrito es: $" + precioFinal)
}

/* ------------------------------------------- Llamado a las funciones -------------------------*/

seleccionServicios();

