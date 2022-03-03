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
        salario:1000,
    },
    {
        id: 2,
        salario:960,
    },
];


const getEmpleado = (id,callback) =>{
    const empleado = empleados.find((e) => e.id === id)

    if(empleado){
         callback(null,empleado.nombre);
    }else{
         callback(`Empleado con id ${id} no existe.`);
    }
    //return empleado;
};  

const getSalario = (id, callback)=>{
    const salario = salarios.find((a) =>a.id === id )
    if(salario){
        callback(null,salario.salario);
    }else{
        callback(`Salario con id ${id} no existe!.`);
    }
}

const id=3;
getEmpleado(1, (err,empleado)=>
{
    if(err){
        console.log('Error!');
        return console.log(err);
    }

    getSalario(id,(err,salario)=>{
        if(err){
            //console.log('Error!')
            return console.log(err);
        }
        console.log('El emplelado',empleado,'tiene un salario de',salario);
    })
});



//console.log(getEmpleado(2));