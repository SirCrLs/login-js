document.addEventListener("DOMContentLoaded", () => {
  const usuarioCorrecto = "carlos";
  const passwordCorrecta = "1234";

  const campoUsuario = document.getElementById("usuario");
  const campoPassword = document.getElementById("password");
  const boton = document.getElementById("btn-login");

  function limpiarErrores() {
    document.querySelectorAll(".error").forEach(e => e.remove());
    campoUsuario.classList.remove("input-error");
    campoPassword.classList.remove("input-error");
  }

  function mostrarError(campo, mensaje) {
    campo.classList.add("input-error");
    const span = document.createElement("span");
    span.classList.add("error");
    span.innerHTML = mensaje;
    campo.insertAdjacentElement("afterend", span);
  }

  boton.addEventListener("click", () => {
    limpiarErrores();

    const usuario = campoUsuario.value.trim();
    const password = campoPassword.value.trim();

    if (usuario === "") mostrarError(campoUsuario, "Ingresa tu cuenta de usuario");
    if (password === "") mostrarError(campoPassword, "Ingresa tu contraseña");
    if (usuario === "" || password === "") return;

    if (usuario !== usuarioCorrecto || password !== passwordCorrecta) {
      mostrarError(campoPassword, "Usuario o contraseña incorrectos");
      campoUsuario.classList.add("input-error");
      return;
    }

    alert("Bienvenido");
  });
});
