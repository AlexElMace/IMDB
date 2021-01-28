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
        return "Título: " + this.title + "\n" +
            "Año de lanzamiento: " + this.releaseYear + "\n" +
            "Actores: " + this.actors + "\n" +
            "Nacionalidad: " + this.nationality + "\n" +
            "Director: " + this.director + "\n" +
            "Guionista: " + this.writer + "\n" +
            "Idioma: " + this.language + "\n" +
            "Plataforma: " + this.platform + "\n" +
            "¿Pertenece al MCU?: " + this.isMCU + "\n" +
            "Actor principal: " + this.mainCharacterName + "\n" +
            "Productora: " + this.producer + "\n" +
            "Distribuidora: " + this.distributor + "\n" +
            "Género: " + this.genre + "\n";
    };
    return Movie;
}());
exports.Movie = Movie;
