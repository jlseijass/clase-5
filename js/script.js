
let arrayDeFavoritos;

if(localStorage.getItem("librosFavoritos")){
    arrayDeFavoritos = JSON.parse(localStorage.getItem("librosFavoritos"));
} else {
    arrayDeFavoritos = [];
};

class Libro {
    constructor(nombre, autor) {
        this.nombre = nombre;
        this.autor = autor;
    };
};

function mostrarLibros(){
    if(arrayDeFavoritos.length > 0){

        let mensaje = "";
        
        for(let i = 0; i < arrayDeFavoritos.length; i++){
            mensaje += arrayDeFavoritos[i].nombre + " (" + arrayDeFavoritos[i].autor + ")\n"
        };

        alert("Estos son tus libros:\n\n" + mensaje);

    } else {
        alert("No tenés libros");
    };
};

function agregarLibro(){
    const nombreNuevoLibro = prompt("Ingrese el nombre de su nuevo libro favorito");
    
    const autorNuevoLibro = prompt("Ingrese el autor de su nuevo libro favorito");

    const nuevoLibro = new Libro(nombreNuevoLibro, autorNuevoLibro);
    arrayDeFavoritos.push(nuevoLibro);
    localStorage.setItem("librosFavoritos", JSON.stringify(arrayDeFavoritos));
    alert("Agregaste correctamente " + nuevoLibro.nombre);
}

let opcion;

do {
    opcion = parseInt(prompt("Bienvenido al sistema de gestión de libros. \n\n1. Para ver sus libros favoritos.\n2. Para agregar un nuevo libro.\nPara salir ingrese 0"));


    switch (opcion) {
        case 0:
            alert("Gracias, vuelva pronto!")
            break;
        case 1:
            mostrarLibros();
            break;
        case 2:
            agregarLibro();
            break;
        default:
            alert("Opción incorrecta");
            break;
    }

} while (opcion !== 0);