//alert("Hola este es mi Javascript");
let nombre ="Renzo"
var nombre1 = "Renzo"
const nombre2 = "Renzo"
console.log(nombre);
console.log(nombre1);
console.log(nombre2);

let contenidoTitulo = "Acerca de mí"

let titulo = document.querySelector(".acerca-de h1")
titulo.innerHTML = contenidoTitulo;

let textoTitulo = titulo.innerText;
console.log(textoTitulo)



if (textoTitulo == "Acerca de mí") { 
    titulo.innerHTML = "Excelente";
    
} else {
    console.log("No lo es")
}

let parrafo = document.querySelector(".parrafo2");

function cambiarparrafo2(nombre, gusto, logro) {
    let contenido = `Me llamo ${nombre}, vivo en la ciudad de Lima. Me gusta 
    ${gusto} y con este curso
    espero poder ${logro}.`;

    return contenido;
}

parrafo.innerText = cambiarparrafo2("Brayam","aprender nuevas cosas", "Incrementar mis conocimientos sobre la programación web")