//log, info, error, warn, table, group
var tabla = [
  {
    a: 1,
    b: "Z",
  },
  {
    a: 2,
    b: "Otra",
  },
];

console.table(tabla);

console.group("Conversacion");
console.log("Hola");
console.log("Blablabla");
console.log("Adios");
console.groupEnd("Conversacion");
console.log("Fuera de conversacion");

function function1() {
  console.group("funcion 1");
  console.log("Esto es de la función 1");
  console.log("Esto también");
  console.log("Esto también");
  function2();
  console.log("Hemos vuelto a la 1");
  console.groupEnd("funcion 1");
}

function function2() {
  console.group("funcion 2");
  console.log("Ahora estamos en la función 2");
  console.groupEnd("funcion 2");
}

function1();

console.count("veces");
console.count("veces");
console.count("veces");
console.countReset("veces");
console.count("veces");
console.count("veces");
