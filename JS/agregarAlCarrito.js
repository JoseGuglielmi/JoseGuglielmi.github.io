const btnAñadirAlCarro = document.querySelectorAll(".carro");

let img;
let nombre;
let precio;



let productos = {
  producto: []
};

const agregarAlCarro = (e) => {
    let esIgual = 0;
    img = e.composedPath()[3].firstElementChild.firstElementChild.outerHTML;
    img = img.substring(img.indexOf('"') + 1, img.length - 2);
    nombre =
      e.composedPath()[3].lastElementChild.firstElementChild.firstElementChild
        .innerHTML;
    precio =
      e.composedPath()[3].lastElementChild.lastElementChild.firstElementChild
        .innerHTML;
    precio = precio.substring(precio.indexOf("$") + 1, precio.length);

    let productoo = { nombre: nombre, precio: precio, src: img };

    if (productos.producto[0] == undefined) {
      productos.producto.push(productoo);
      localStorage.setItem("producto", JSON.stringify(productos));
    } else {
      for (c in productos.producto) {
        if (JSON.stringify(productos.producto[c]) == JSON.stringify(productos)) {
          esIgual = 1;
        }
      }
      if(esIgual == 0){
        productos.producto.push(productoo);
        localStorage.setItem("producto", JSON.stringify(productos));
      }
    }

    esIgual = 0;
};

btnAñadirAlCarro.forEach((a) => {
  a.addEventListener("click", agregarAlCarro);
});
