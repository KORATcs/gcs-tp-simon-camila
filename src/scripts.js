function validarTelefono(tel) {
  return /^[0-9]+$/.test(tel);
}

function guardarCliente() {
  const nombre = document.getElementById("nombre").value;
  const telefono = document.getElementById("telefono").value;
  const mensaje = document.getElementById("mensaje");

  if (!validarTelefono(telefono)) {
    mensaje.textContent = "El teléfono solo debe contener números";
    return;
  }
  mensaje.textContent = "Cliente guardado: " + nombre + " - " + telefono;
}

if (typeof module !== "undefined") {
  module.exports = { validarTelefono };
}