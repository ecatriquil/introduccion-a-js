// creá un formulario que capture el primer nombre, segundo nombre, apellido/s y edad del usuario
// también vamos a crear un <h1> que diga Bienvenido!
// vas a crear un botón de acción que una vez que lo apretás, va a
// mostrar toda la información junta en un campo de texto
// Y va a cambiar el <h1> para decir "Bienvenido, nombreDeUsuario"!

document.querySelector('#ingresar').onclick = () => {
  const primerNombreUsuario = document.querySelector('#primer-nombre-usuario').value;
  const segundoNombreUsuario = document.querySelector('#segundo-nombre-usuario').value;
  const apellidoUsuario = document.querySelector('#apellido-usuario').value;
  const edadUsuario = Number(document.querySelector('#edad-usuario').value);
  const titulo = document.querySelector('#titulo-principal');
  const campoDeTexto = document.querySelector('#resultado');
  titulo.textContent = `Bienvenido/a ${primerNombreUsuario}`;
  const contenidoResultado = document.createTextNode(`Tu nombre es: ${primerNombreUsuario} ${segundoNombreUsuario} ${apellidoUsuario}. Tenes ${edadUsuario} años`);
  campoDeTexto.appendChild(contenidoResultado);

}
// const nodoPagina = document.querySelector('body');
// const nuevoParrafo = document.createElement('p');
// const textoParrafo = document.createTextNode('Yeeee!');
// nuevoParrafo.appendChild(textoParrafo);
// nodoPagina.appendChild(nuevoParrafo);

/*
Ejemplo form:
  <form id="entrada-bar" onsubmit="return false;">
    <input type="text" placeholder="Ingresá tu nombre" id="nombre-usuario"/>
    <input type="number" placeholder="Ingresá tu edad" id="edad-usuario" />
    <input type="submit" value="Ingresar" id="ingresar"/>
  </form>

  <div id="resultado">Hola</div>
*/