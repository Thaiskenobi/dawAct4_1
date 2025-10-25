const modulos = document.querySelectorAll("#modulos li");
const mensaje = document.getElementById("mensaje");

modulos.forEach((modulo) => {
  modulo.addEventListener("click", () => {
    mensaje.textContent = `Has seleccionado: ${modulo.textContent}`;
    mensaje.style.opacity = "0";
    setTimeout(() => (mensaje.style.opacity = "1"), 200);

    // Pequeño efecto al hacer clic
    modulo.style.color = "#004080";
    modulo.style.fontWeight = "bold";
    setTimeout(() => {
      modulo.style.fontWeight = "normal";
    }, 600);
  });
});

