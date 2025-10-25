const modulos = document.querySelectorAll("#modulos li");
const mensaje = document.getElementById("mensaje");

modulos.forEach((modulo) => {
	modulo.addEventListener("click", () => {
	mensaje.textContent = `Has seleccionado: ${modulo.textContent}`;
	});
});
