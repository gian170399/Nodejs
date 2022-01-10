const getUsuariosSync=(id)=>{
    const startPoint = new Date().getTime();
    while(new Date().getTime()-startPoint<=3000){
        //esperando..
        //haciendo fetch de base de datos
    }
    return{
        id,
        nombre: `Usuario ${id}`,
    }
}

const getUsuario = (id, callback)=>{
    const usuario={
        id,
        nombre: `Usuario ${id}`,
    };
    setTimeout(()=>{
        callback(usuario);
    },3000);
}

module.exports={
    getUsuario,
    getUsuariosSync
}