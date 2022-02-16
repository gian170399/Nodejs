

const getUsuarioId = (id,callback)=>{
    const usuario={
        id:id,
        nombre:'Giancarlo',
    }

    setTimeout(()=>{
       callback(usuario);
    },1500);
}

getUsuarioId(7, (user)=>{
    console.log(user);
});