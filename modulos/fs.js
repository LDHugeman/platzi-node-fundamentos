const fs = require("fs");
const NOMBRE_ARCHIVO = "/archivo.txt";

function leer(ruta) {
  return new Promise((resolve, reject) => {
    fs.readFile(ruta, (err, data) => {
      if (err) {
        console.error(err);
      }
      resolve(data.toString());
    });
  });
}

function escribir(ruta, contenido) {
  return new Promise((resolve, reject) => {
    fs.writeFile(ruta, contenido, (err) => {
      if (err) {
        console.error("No se ha escrito el archivo", err);
      } else {
        console.log("Se ha escrito correctamente");
        resolve();
      }
    });
  });
}

function borrar(ruta) {
  return new Promise((resolve, reject) => {
    fs.unlink(ruta, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

escribir(__dirname + "/archivo1.txt", "Soy un archivo nuevo");

leer(__dirname + NOMBRE_ARCHIVO).then((data) => {
  console.log(data);
});

borrar(__dirname + "/archivo1")
  .then(() => {
    console.log("Se ha borrado correctamente");
  })
  .catch((err) => {
    console.error(err);
  });
