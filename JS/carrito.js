const btnCarrito = document.querySelector(".btn-carrito");
const contenedorPreductos = document.querySelector(".contenedor");

const contenedorDelCarro = document.querySelector(".contenedor-carrito-compras");
const frag = document.createDocumentFragment();
const carrito = document.createElement("iframe");

carrito.src="HTML/carrito.html"
carrito.style.width="100%";
carrito.style.height="100%";
carrito.style.border="none";

frag.appendChild(carrito);



const abrirMenuCarrito = ()=>{
    contenedorPreductos.style.display="none";
    contenedorDelCarro.style.height="500px";
    contenedorDelCarro.appendChild(frag);
};

btnCarrito.addEventListener("click",abrirMenuCarrito);

