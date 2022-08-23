//creo el json para enviar al servidor
let json = {
    "nombre": "JOSE",
    "edad":21
};

//creo la peticion con el metodo post
//primer parametro le pasamos una url o archivo que queremos solicitar
//segundo parametro un bloque
let peticion = fetch("https://reqres.in/api/users",{
    //metodo por el cual hacemos la solicitud
    method:"POST",
    //datos que enviamos(json)
    body: JSON.stringify(json),
    headers:{
        "Content-type":"application/json"
    
    }
});

//leo lo que me devolvio el servidor
peticion.then(res=>res.json()).then(res=>console.log(res))
