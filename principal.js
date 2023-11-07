import catalogo from "./catalogo.js"

const elementoVista = document.getElementById("catalogo")
let contenido = ``;
catalogo.articulos.forEach((articulo)=>{
    contenido += ` <figure class="main-vinos__figure">
    <img src="${articulo.imagen}" alt="img-vino">
    <figcaption></figcaption>
    <p>${articulo.nombre}</p>
    <p>${articulo.tipo}</p>
    <p>${articulo.precio}</p>
</figure>`
})

elementoVista.innerHTML = contenido