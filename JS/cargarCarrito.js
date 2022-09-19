//contenedor del carrito donde metemos los productos
const contenedorCarro = document.querySelector(".contenedor");

//datos obtenidos
let datosProductos;

const agregarFrag = (element) => {

  let frag = document.createDocumentFragment();

  frag.appendChild(element);

  return frag;
};

//retorno los datos almacenados en el local strorage
const obtenerDatosLocalStorage = ()=>{
  //obtengo y retorno los datos del local strorage
  return JSON.parse(localStorage.getItem("producto"));
};

//funcion que se encarga de obtener y asignar los datos de los productos
const agregarAlCarro = () => {

  datosProductos = obtenerDatosLocalStorage();

  if (datosProductos != null) {

    for (Producto in datosProductos.producto) {

      //contenedor donde meto el producto
      let contenedorCarrito = document.createElement("div");
      //le agrego una clase
      contenedorCarrito.classList.add("contenedor-carrito");

      //datos del producto
      const producto = `

        <div class="contenedor-carrito__img">
          <img src=" ${datosProductos.producto[Producto].src}">
        </div>
        <div class="contenedor-descripcion">
          <h3 class="titulo">${datosProductos.producto[Producto].nombre}</h3>
          <p class="precio">${"$" + datosProductos.producto[Producto].precio}</p>
        </div>
        <div class="contenedor-cantidad">
          <button class="btn-mas mas">+</button>
          <p class="cantidad">${datosProductos.producto[Producto].cantidad}</p>
          <button class="btn-mas menos">-</button>
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

//llamo a la funcion que me agrega los productos al carrito de compras
agregarAlCarro();



contenedorCarro.addEventListener("click", (e)=>{

    //obtendo el dato de que se preciono
    const botonEliminarProducto  = e.target;

    //si se apreto el boton de eliminar elimino el producto seleccionado
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
    }else if(botonEliminarProducto.className == "btn-mas mas")
    {
 
     const contenedor = botonEliminarProducto.closest(".contenedor-carrito");

      const titulo = contenedor.querySelector(".titulo").innerHTML;

      let productos = obtenerDatosLocalStorage();

      for(c in productos.producto){
        if(productos.producto[c].nombre == titulo){

          productos.producto[c].cantidad++;

           localStorage.clear();

          localStorage.setItem("producto", JSON.stringify(productos));

          location.reload();

         
        }
      }



    }else if(botonEliminarProducto.className == "btn-mas menos")
      {

      const contenedor = botonEliminarProducto.closest(".contenedor-carrito");

      const titulo = contenedor.querySelector(".titulo").innerHTML;

      let productos = obtenerDatosLocalStorage();

      for(c in productos.producto){
        if(productos.producto[c].nombre == titulo){

            productos.producto[c].cantidad--;

            if(productos.producto[c].cantidad <= 0){
              
              productos.producto.splice(c,1);

              localStorage.clear();

              localStorage.setItem("producto", JSON.stringify(productos));

              location.reload();
            }else{

              localStorage.clear();

              localStorage.setItem("producto", JSON.stringify(productos));

              location.reload();
            }
          }
        }
      }
});