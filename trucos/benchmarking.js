console.time('todo');
let suma = 0;

console.time('bucle1');
for (let i = 0; i < 1000000000; i++) {
  suma++;
}
console.timeEnd('bucle1');

let suma2 = 0;
console.time('bucle2');
for (let i = 0; i < 10000000000; i++) {
  suma2++;
}
console.timeEnd('bucle2');

console.time('asincrona');
console.log('inicia asincrono');
asincrona().then(() => {
  console.timeEnd('asincrona');
});

console.timeEnd('todo');

//-------------------

function asincrona() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Termina el proceso asincrono');
      resolve();
    }, 1000);
  });
}
