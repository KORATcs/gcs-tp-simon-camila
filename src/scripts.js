function guardarCliente() {
  const nombre = document.getElementById("nombre").value;
  const telefono = document.getElementById("telefono").value;
  document.getElementById("mensaje").textContent =
    "Cliente guardado: " + nombre + " - " + telefono;
}