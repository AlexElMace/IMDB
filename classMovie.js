"use strict";
exports.__esModule = true;
exports.Movie = void 0;
var Movie = /** @class */ (function () {
    function Movie(title, releaseYear, nationality, genre) {
        this.title = title;
        this.releaseYear = releaseYear;
        this.nationality = nationality;
        this.genre = genre;
    }
    Movie.prototype.toString = function () {
        var i;
        var actores = "";
        console.log("Título: " + this.title);
        console.log("Año de lanzamiento: " + this.releaseYear);
        for (i = 0; i < this.actors.length; i++) {
            actores += this.actors[i].name + ", ";
        }
        console.log("Actores: " + actores);
        console.log("Nacionalidad: " + this.nationality);
        console.log("Director: " + this.director.name);
        console.log("Guionista: " + this.writer.name);
        console.log("Idioma: " + this.language);
        console.log("Plataforma: " + this.platform);
        console.log("¿Pertenece al MCU?: " + this.isMCU);
        console.log("Actor principal: " + this.mainCharacterName);
        console.log("Productora: " + this.producer);
        console.log("Distribuidora: " + this.distributor);
        console.log("Género: " + this.genre);
    };
    return Movie;
}());
exports.Movie = Movie;
