//forma 1
function sumar (a,b){
    return a +b;
}

//console.log(sumar(7,8));

//siempre pondremos una const por referencia a que la funcion suma
//no se repita en algun otro lado del codigo
//forma 2
const suma=(a,b)=>{
    return a+b;
}

//forma 3
const suma1=(a,b)=> a+b;


const saludo = () => 'Hola Gian'


console.log(suma(9,9));
console.log(saludo())