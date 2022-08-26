const html = document.querySelector(".html");

const imagenes = document.querySelectorAll(".contenedor__producto__img");

const primeraPlana = document.querySelector(".contenedor-principal");

const imagenActiva = document.querySelector(".imagen-activa");

let indiceImagen = 0;

const abrirContenedorPrincipal = (e) =>{
	imagenActiva.src = e.target.src;	
	primeraPlana.style.display = "flex";
	html.style.overflow = "hidden";
}

imagenes.forEach((imagen) =>{
	imagen.addEventListener("click", abrirContenedorPrincipal);
})

primeraPlana.addEventListener("click", (e) =>{
	if(e.target.className != "imagen-activa"){
		primeraPlana.style.display = "none";
		html.style.overflow = "auto";
	}
	
})