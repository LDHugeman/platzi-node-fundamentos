function seRompe() {
  return 3 + z;
}

function otraFuncion() {
  seRompe();
}

function seRompeAsincrona() {
  setTimeout(() => {
    try {
      return 3 + z;
    } catch (err) {
      console.error('Error en funcion asincrona');
    }
  }, 100);
}

try {
  //otraFuncion();
  seRompeAsincrona();
} catch (err) {
  console.error('Algo se ha roto');
  console.error(err.message);
  console.log('Pero no pasa nada lo hemos capturado');
}
console.log('Esto de aqui esta al final');
