// Datos y variables 
let nombre = "pepe";
let edad = 25;
let precio = 99.90;
let serieFavorita= ["Dark", "Mr robot","Castlevania"];
let peliculaFavorita = [
    {
        nombre: "Los juegos del hambre",
        año: 2012,
        protagonistas: ["Jennifer Lawrence", "Josh Hutcherson", "Liam Hemsworth","Donald Sutherland"]

    }, 
    {
        nombre: "La vida es bella",
        año: 2002,
        protagonistas: ["Liam Adrien Brody", "Thomas Kretschmann", "Emilia Fox","Ed Stoppard"]

    },
    {
        nombre: "Que paso ayer",
        año: 2009,
        protagonistas: ["Bradley Cooper", "Zach Galifianakis ", "Ed Helms","Justin Bartha","Ken Jeong"]
}
];

//Mostrar todos esos valores por consola

console.log ("nombre",nombre);
console.log ("edad",edad);
console.log ("precio",precio);
console.log(`Serie Favorita: ${serieFavorita.join(", ")}`);

console.log("Películas Favoritas:");
peliculaFavorita.forEach((pelicula, index) => {
    console.log(`Película ${index + 1}:`);
    console.log("  Nombre:", pelicula.nombre);
    console.log("  Año:", pelicula.año);
    console.log("  Protagonistas:", pelicula.protagonistas.join(", "));
});

// 3.Incrementar la edad en 1 y volver a mostrarla

let edadActual = 26;
console.log ('La edad actual es:', edadActual);
edadActual++;
console.log('La edad incrementada es:', edadActual);

// 4.Agregar una serie a la lista de series favoritas y volver a mostrarla.

serieFavorita.push("Harry Potter");
console.log(`Serie Favorita Actualizada: ${serieFavorita.join(", ")}`);
