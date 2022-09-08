//agrego los datos

//contenedor del carrito donde metemos los productos
const contenedorCarro = document.querySelector(".contenedor");

//datos obtenidos
let datosProductos;

const agregarFrag = (element) => {
  let frag = document.createDocumentFragment();

  frag.appendChild(element);

  return frag;
};

//funcion que se encarga de obtener y asignar los datos de los productos
const agregarAlCarro = () => {
  datosProductos = JSON.parse(localStorage.getItem("producto"));

  for (Producto in datosProductos.producto) {
    //contenedor donde meto el producto
    let contenedorCarrito = document.createElement("div");
    contenedorCarrito.classList.add("contenedor-carrito");

    //contenedor de la img
    let contenedorImg = document.createElement("div");
    contenedorImg.classList.add("contenedor-carrito__img");

    //la imagen del producto
    let imgProducto = document.createElement("img");

    let contenedorDescripcion = document.createElement("div");
    contenedorDescripcion.classList.add("contenedor-descripcion");

    let titulo = document.createElement("h3");

    let precio = document.createElement("p");
    precio.classList.add("precio");

    let contenedorCantidad = document.createElement("div");
    contenedorCantidad.classList.add("contenedor-cantidad");

    let btnMas = document.createElement("button");
    btnMas.classList.add("btn-mas");
    btnMas.innerHTML = "+";

    let cantidad = document.createElement("p");
    cantidad.classList.add("cantidad");

    let btnMenos = document.createElement("button");
    btnMenos.classList.add("btn-mas");
    btnMenos.innerHTML = "-";

    let frag = document.createDocumentFragment();

    frag.appendChild(btnMas);
    frag.appendChild(cantidad);
    frag.appendChild(btnMenos);

    contenedorCantidad.appendChild(frag);

    imgProducto.src = "../" + datosProductos.producto[Producto].src;
    titulo.innerHTML = datosProductos.producto[Producto].nombre;
    precio.innerHTML = datosProductos.producto[Producto].precio;
    cantidad.innerHTML = 1;

    contenedorImg.appendChild(agregarFrag(imgProducto));

    contenedorDescripcion.appendChild(agregarFrag(titulo));
    contenedorDescripcion.appendChild(agregarFrag(precio));

    contenedorCarrito.appendChild(agregarFrag(contenedorImg));
    contenedorCarrito.appendChild(agregarFrag(contenedorDescripcion));
    contenedorCarrito.appendChild(agregarFrag(contenedorCantidad));

    contenedorCarro.appendChild(agregarFrag(contenedorCarrito));
  }
};

agregarAlCarro();
