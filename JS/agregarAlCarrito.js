const btnAñadirAlCarro = document.querySelectorAll(".carro");

let img;
let nombre;
let precio;

let esIgual = 0;

let productos = {
    producto: [],
  };

module.exports =  productos;

const agregarAlCarro = (e) => {
    img = e.composedPath()[3].firstElementChild.firstElementChild.outerHTML;
    img = img.substring(img.indexOf('"') + 1, img.length - 2);
    nombre =
      e.composedPath()[3].lastElementChild.firstElementChild.firstElementChild
        .innerHTML;
    precio =
      e.composedPath()[3].lastElementChild.lastElementChild.firstElementChild
        .innerHTML;
    precio = precio.substring(precio.indexOf("$") + 1, precio.length);
    let producto = { nombre: nombre, precio: precio, src: img };

    if (productos.producto[0] == undefined) {
      productos.producto.push(producto);
      localStorage.setItem("producto", JSON.stringify(productos));
    } else {
      for (c in productos.producto) {
        if (JSON.stringify(productos.producto[c]) == JSON.stringify(producto)) {
          esIgual = 1;
        }
      }

      if (esIgual == 0) {
        productos.producto.push(producto);
        localStorage.setItem("producto", JSON.stringify(productos));
      }
    }
  
};

btnAñadirAlCarro.forEach((a) => {
  a.addEventListener("click", agregarAlCarro);
});
