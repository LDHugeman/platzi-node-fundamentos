function hola(nombre, miCallback) {
  setTimeout(() => {
    console.log("Hola, " + nombre);
    miCallback(nombre);
  }, 1000);
}

function hablar(callbackHablar) {
  setTimeout(() => {
    console.log("Bla bla bla bla...");
    callbackHablar();
  }, 1000);
}

function adios(nombre, otroCallback) {
  setTimeout(() => {
    console.log("Adios, " + nombre);
    otroCallback();
  }, 1000);
}

function conversacion(nombre, veces, callback) {
  if (veces > 0) {
    hablar(() => {
      conversacion(nombre, --veces, callback);
    });
  } else {
    callback(nombre, () => {
      console.log("Terminando proceso...");
    });
  }
}

// --
console.log("Iniciando proceso...");
hola("Carlos", (nombre) => {
  conversacion(nombre, 3, adios);
});

/*hola("Carlos", () => {
  hablar(() => {
    hablar(() => {
      hablar(() => {
        adios("Carlos", () => {
          console.log("Terminando proceso...");
        });
      });
    });
  });
});*/
