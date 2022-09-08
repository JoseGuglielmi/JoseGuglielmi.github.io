//contenedor donde meto el producto
const contenedorCarrito = document.createElement("div");
contenedorCarrito.classList.add("contenedor-carrito");

//contenedor de la img
const contenedorImg = document.createElement("div");
contenedorImg.classList.add("contenedor-carrito__img");

//la imagen del producto
const imgProducto = document.createElement("img");

const contenedorDescripcion = document.createElement("div");
contenedorDescripcion.classList.add("contenedor-descripcion");

const titulo = document.createElement("h3");

const precio = document.createElement("p");
precio.classList.add("precio");

const contenedorCantidad = document.createElement("div");
contenedorCantidad.classList.add("contenedor-cantidad");




const btnMas = document.createElement("button");
btnMas.classList.add("btn-mas");
btnMas.innerHTML = "+";

const cantidad = document.createElement("p");
cantidad.classList.add("cantidad");
cantidad.innerHTML = "1";

const btnMenos = document.createElement("button");
btnMenos.classList.add("btn-mas");
btnMenos.innerHTML = "-";

const frag = document.createDocumentFragment();

frag.appendChild(btnMas);
frag.appendChild(cantidad);
frag.appendChild(btnMenos);

contenedorCantidad.appendChild(frag);

//agrego los datos

//contenedor del carrito donde metemos los productos
const contenedorCarro = document.querySelector(".contenedor");

//datos obtenidos
let datosProductos;

//funcion que se encarga de obtener y asignar los datos de los productos
const agregarAlCarro= ()=>{
    datosProductos = localStorage.getItem("producto");
    console.log(datosProductos);
};

agregarAlCarro();