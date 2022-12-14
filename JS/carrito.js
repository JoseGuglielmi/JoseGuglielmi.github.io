const btnCarrito = document.querySelector(".btn-carrito");

const html = document.querySelector(".html");

const contenedorDelCarro = document.querySelector(".contenedor-carrito-compras");

const carrito = document.querySelector(".panel-carrito");

const btnCerrar = document.querySelector(".btnCerrar");

const btnBorrar = document.querySelector(".btnBorrar");

const abrirMenuCarrito = () => {
    carrito.src="HTML/carrito.html";
    html.style.overflow = "hidden";
    contenedorDelCarro.style.display = "flex";
};

const cerrarMenuCarrito = () => {
    contenedorDelCarro.style.display = "none";
    html.style.overflow = "auto";
};

const borrarCarrito = () => {
    localStorage.clear();
};

btnCarrito.addEventListener("click", abrirMenuCarrito);

contenedorDelCarro.addEventListener("click", cerrarMenuCarrito);

btnBorrar.addEventListener("click", borrarCarrito);