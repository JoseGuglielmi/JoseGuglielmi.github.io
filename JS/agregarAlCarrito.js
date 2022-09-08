const btnAñadirAlCarro = document.querySelectorAll(".carro");

let img;
let nombre;
let precio;



const agregarAlCarro = (e) =>{
    img = e.composedPath()[3].firstElementChild.firstElementChild.outerHTML;
    img = img.substring(img.indexOf('"')+1,img.length-2);
    nombre = e.composedPath()[3].lastElementChild.firstElementChild.firstElementChild.innerHTML;
    precio = e.composedPath()[3].lastElementChild.lastElementChild.firstElementChild.innerHTML;
    precio = precio.substring(precio.indexOf("$")+1,precio.length);
    
    let producto = {
        nombre : nombre,
        precio : precio,
        src : img
    };

    localStorage.setItem("producto",JSON.stringify(producto));

};

btnAñadirAlCarro.forEach(a =>{
    a.addEventListener("click",agregarAlCarro);
});


