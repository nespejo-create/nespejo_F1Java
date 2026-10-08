function cambiarTema() {
  document.body.classList.toggle("oscuro");
}

function mostrarInfoPiloto(nombre) {

    const pilotos = {
        "Max Verstappen": {
            edad: 28,
            equipo: "Red Bull",
            nacionalidad: "Holanda"
        },
        "Andrea Antonelli": {
            edad: 20,
            equipo: "Mercedes",
            nacionalidad: "Italia"
        }
    };

    const p = pilotos[nombre];

    alert(
        "Información del piloto:\n\n" +
        "Nombre: " + nombre + "\n" +
        "Edad: " + p.edad + " años\n" +
        "Equipo: " + p.equipo + "\n" +
        "Nacionalidad: " + p.nacionalidad
    );
}



function validarFormulario() {
  const nombre = document.getElementById("nombre").value;

  if (nombre.trim() === "") {
    alert("Debes introducir tu nombre");
    return false;
  }

  alert("Formulario enviado correctamente");
  return true;
}