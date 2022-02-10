const Deadpool = {
    nombre: 'Gian',
    apellido: 'Ruiz',
    poder: 'Volar' ,
    getNombre() {
        return `${this.nombre} ${this.apellido} ${this.poder}`;
    }  
}

//const {nombre,apellido,poder} = Deadpool;

//console.log(Deadpool.getNombre());

//////////////////////////////////////////////////////

function imprimeHeroe(heroe){
    const {nombre,apellido,poder} = heroe;
    console.log(nombre,apellido,poder);
}

imprimeHeroe(Deadpool);


/////////////////////////////////////

const heros = ['deadpool','superman','batman'];

const [ , ,h3] = heros;

console.log(h3);