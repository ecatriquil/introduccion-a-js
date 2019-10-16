// creá un formulario que capture el primer nombre, segundo nombre, apellido/s y edad del usuario
// también vamos a crear un <h1> que diga Bienvenido!
// vas a crear un botón de acción que una vez que lo apretás, va a
// mostrar toda la información junta en un campo de texto
// Y va a cambiar el <h1> para decir "Bienvenido, nombreDeUsuario"!

document.querySelector('#ingresar').onclick = () => {
  // Obtener datos del usuario
  const primerNombreUsuario = document.querySelector('#primer-nombre-usuario').value;
  const segundoNombreUsuario = document.querySelector('#segundo-nombre-usuario').value;
  const apellidoUsuario = document.querySelector('#apellido-usuario').value;
  const edadUsuario = Number(document.querySelector('#edad-usuario').value);

  // Personalizar saludo
  const titulo = document.querySelector('#titulo-principal');
  titulo.textContent = `Bienvenido/a ${primerNombreUsuario}`;

  // Mostrar los datos en un text area
  const contenidoResultado = `Tu nombre es: ${primerNombreUsuario} ${segundoNombreUsuario} ${apellidoUsuario}. Tenes ${edadUsuario} años`;
  document.querySelector('#resultado').value = contenidoResultado;

}
