const btnAñadirAlCarro = document.querySelector(".contenedor");

let img;
let nombre;
let precio;

const agregarAlCarro = (e) => {
  let productos = {
  producto: []
  };
    let esIgual = 0;

    const botonAgregar = e.target;
    const contenedor = botonAgregar.closest(".contenedor__producto");

    img = contenedor.querySelector(".img").src;
    nombre = contenedor.querySelector(".titulo").innerHTML;
    precio = contenedor.querySelector(".precio").innerHTML;
    precio = precio.substring(9,precio.lenght);

    let producto = { nombre: nombre, precio: precio, src: img };

    datosProductos = JSON.parse(localStorage.getItem("producto"));

    if(datosProductos != null){
      productos = datosProductos;
    }

    if(productos.producto[0] == undefined) {
      productos.producto.push(producto);
      localStorage.setItem("producto", JSON.stringify(productos));
    } else {
      for (c in productos.producto) {
        if (JSON.stringify(productos.producto[c]) == JSON.stringify(producto)) {
          esIgual = 1;
        }
      }
      if(esIgual == 0){
        productos.producto.push(producto);
        localStorage.setItem("producto", JSON.stringify(productos));
      }
    }

    esIgual = 0;
};

btnAñadirAlCarro.addEventListener("click", agregarAlCarro);