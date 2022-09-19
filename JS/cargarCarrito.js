//contenedor del carrito donde metemos los productos
const contenedorCarro = document.querySelector(".contenedor");

//boton de eliminar producto
const botonEliminarProducto = document.querySelector(".eliminar");

//datos obtenidos
let datosProductos;

const agregarFrag = (element) => {
  let frag = document.createDocumentFragment();

  frag.appendChild(element);

  return frag;
};

const obtenerDatosLocalStorage = ()=>{
  return JSON.parse(localStorage.getItem("producto"));
};

//funcion que se encarga de obtener y asignar los datos de los productos
const agregarAlCarro = () => {

  datosProductos = obtenerDatosLocalStorage();

  if (datosProductos != null) {

    for (Producto in datosProductos.producto) {

      //contenedor donde meto el producto
      let contenedorCarrito = document.createElement("div");
      contenedorCarrito.classList.add("contenedor-carrito");

      const producto = `

        <div class="contenedor-carrito__img">
          <img src=" ${datosProductos.producto[Producto].src}">
        </div>
        <div class="contenedor-descripcion">
          <h3 class="titulo">${datosProductos.producto[Producto].nombre}</h3>
          <p class="precio">${"$" + datosProductos.producto[Producto].precio}</p>
        </div>
        <div class="contenedor-cantidad">
          <button class="btn-mas">+</button>
          <p class="cantidad">${datosProductos.producto[Producto].cantidad}</p>
          <button class="btn-mas">-</button>
        </div>
        <button class="eliminar"><i class="fa-solid fa-trash"></i></button>
        ` 
      //lo agrego al div que contiene el producto
      contenedorCarrito.innerHTML = producto;

      //lo agrego al html
      contenedorCarro.appendChild(agregarFrag(contenedorCarrito));
    }
  }
};

agregarAlCarro();



contenedorCarro.addEventListener("click", (e)=>{
    const botonEliminarProducto  = e.target;
    if(botonEliminarProducto.className == "fa-solid fa-trash"){
      const contenedor = botonEliminarProducto.closest(".contenedor-carrito");
      const titulo = contenedor.querySelector(".titulo").innerHTML;

      let productos = obtenerDatosLocalStorage();

      for(c in productos.producto){
        if(productos.producto[c].nombre == titulo){
          
          productos.producto.splice(c,1);

          localStorage.clear();

          localStorage.setItem("producto", JSON.stringify(productos));

          location.reload();

          
        }
      }
    }
});