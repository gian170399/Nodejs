const empleados = [
    {
        id: 1,
        nombre: 'Gian',
    },
    {
        id: 2,
        nombre: 'Robert',
    },

    {
        id: 3,
        nombre: 'Leo',
    },
];

const salarios = [
    {
        id: 1,
        nombre:1000,
    },
    {
        id: 2,
        nombre:960,
    },
];


const getEmpleado = (id,callback) =>{
    const empleado = empleados.find((e) => e.id === id)

    if(empleado){
         callback(null,empleado);
    }else{
         callback(`Empleado con id ${id} no existe.`);
    }
    //return empleado;
};  

getEmpleado(1, (err,empleado)=>
{
    if(err){
        console.log('Error!');
        return console.log(err);
    }

    console.log('Empleado existe!')
    console.log(empleado);
});

//console.log(getEmpleado(2));