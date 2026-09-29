const formulario = document.getElementById("contact-form");
const nombreInput = document.getElementById("nombre");
const telefonoInput = document.getElementById("telefono");
const listaContactos = document.getElementById("lista-contactos");
const contador = document.getElementById("contador");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  const nombre = nombreInput.value.trim();
  const telefono = telefonoInput.value.trim();

  if (nombre === "" || telefono === "") {
    alert("Completa todos los campos.");
    return;
  }

  const li = document.createElement("li");

  li.innerHTML = `
    <span>
      <strong>${nombre}</strong> - ${telefono}
    </span>
    <button type="button">Eliminar</button>
  `;

  listaContactos.appendChild(li);
  contador.textContent = listaContactos.children.length;

  nombreInput.value = "";
  telefonoInput.value = "";
});

listaContactos.addEventListener("click", function (event) {
  if (event.target.tagName === "BUTTON") {
    event.target.parentElement.remove();
    contador.textContent = listaContactos.children.length;  
  }
});