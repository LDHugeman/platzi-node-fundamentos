const { exec, spawn } = require('child_process');
const { stdout } = require('process');

function execConsolajs() {
  exec('node modulos/consola.js', (err, stdout, sterr) => {
    if (err) {
      console.error(err);
      return false;
    }
    console.log(stdout);
  });
}

function execlsla() {
  exec('ls -la', (err, stdout, sterr) => {
    if (err) {
      console.error(err);
      return false;
    }
    console.log(stdout);
  });
}

//execlsla();
//execConsolajs();

let proceso = spawn('ls', ['-la']);

console.log(proceso.pid);
console.log(proceso.connected);

proceso.stdout.on('data', (dato) => {
  console.log('Está muerto?');
  console.log(proceso.killed);
  console.log(dato.toString());
});

proceso.on('exit', () => {
  console.log('el proceso terminó');
  console.log(proceso.killed);
});
