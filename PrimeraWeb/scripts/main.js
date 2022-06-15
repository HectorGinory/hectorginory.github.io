let miImage = document.querySelector('img');
miImage.onclick = function () {
    let miSrc = miImage.getAttribute('src');
    if (miSrc === "images\foto_1.png") {
      miImage.setAttribute('src',"images\foto_2.png");
    } else {
      miImage.setAttribute('src', "images\foto_1.png");
    }
}

let miBoton = document.querySelector('button');
let miTitulo = document.querySelector( 'h1');

function estableceNombreUsuario() {
  let miNombre = prompt('Introduzca su nombre.');
  if(!miNombre) {
    estableceNombreUsuario();
  } else {
    localStorage.setItem('nombre', miNombre);
    miTitulo.innerHTML = 'Bienvenid@ a mi web, ' + miNombre;
  }
}
if (!localStorage.getItem('nombre')) {
  estableceNombreUsuario();
}
else {
  let nombreAlmacenado = localStorage.getItem('nombre');
  miTitulo.textContent = 'Bienvenid@ a mi web, ' + nombreAlmacenado;
}

miBoton.onclick = function() {
  estableceNombreUsuario();
}