"use strict";
exports.__esModule = true;
var Movie = /** @class */ (function () {
    function Movie(title, releaseYear, nationality, genre) {
        this.title = title;
        this.releaseYear = releaseYear;
        this.nationality = nationality;
        this.genre = genre;
    }
    Movie.prototype.setLanguage = function (newLanguage) {
        this.nationality = newLanguage;
    };
    Movie.prototype.toString = function () {
        return "Título: " + this.title + "\n" +
            "Año de lanzamiento: " + this.releaseYear + "\n" +
            "Actores: " + +"\n" +
            "Nacionalidad: " + this.nationality + "\n" +
            "Director: " + +"\n" +
            "Guionista: " + +"\n" +
            "Idioma: " + +"\n" +
            "Plataforma: " + +"\n" +
            "¿Pertenece al MCU?: " + +"\n" +
            "Actor principal: " + +"\n" +
            "Productora: " + +"\n" +
            "Distribuidora: " + +"\n" +
            "Género: " + +"\n";
    };
    return Movie;
}());
