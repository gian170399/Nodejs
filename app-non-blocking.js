const {getUsuariosSync} = require('/.usuario/usuarios');

console.log('Inicio de programa');
console.time('Inicio');

const usuario1 = getUsuariosSync(1);
console.log('Usuario 1:',usuario1);

const usuario2 = getUsuariosSync(2);
console.log('Usuario 2:',usuario2);

console.log('Fin de programa');
console.timeEnd('Inicio');