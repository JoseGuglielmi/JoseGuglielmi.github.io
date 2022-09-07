const btnCarrito = document.querySelector(".btn-carrito");

const html = document.querySelector(".html");

const contenedorDelCarro = document.querySelector(".contenedor-carrito-compras");

const carrito = document.querySelector(".panel-carrito");

const abrirMenuCarrito = ()=>{
    //carrito.src="HTML/carrito.html";
    html.style.overflow = "hidden";
    contenedorDelCarro.style.display="flex";
};

const cerrarMenuCarrito = (e)=>{
    if(e.target.className != "contenedor-carrito-compras"){
	    contenedorDelCarro.style.display = "none";
		html.style.overflow = "auto";
	}
};

btnCarrito.addEventListener("click",abrirMenuCarrito);

contenedorDelCarro.addEventListener("click",cerrarMenuCarrito);

