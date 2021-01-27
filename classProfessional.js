"use strict";
exports.__esModule = true;
exports.Movie = exports.Professional = void 0;
var Professional = /** @class */ (function () {
    function Professional(name, age, genre, weight, height, hairColor, eyeColor, race, isRetired, nationality, oscarsNumber, profession) {
        this.name = name;
        this.age = age;
        this.genre = genre;
        this.weight = weight;
        this.height = height;
        this.hairColor = hairColor;
        this.eyeColor = eyeColor;
        this.race = race;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarsNumber = oscarsNumber;
        this.profession = profession;
    }
    Professional.prototype.professional = function () {
        return "Name: " + this.name + "\n Age: " + this.age + "\n Genre: " + this.genre + "\n Weight: " + this.weight + "\n Height: " + this.height + "\n Hair color: " + this.hairColor + "\n Eye color: " + this.eyeColor + "\n Race: " + this.race + "\n Retired: " + this.isRetired + "\n Nationality: " + this.nationality + "\n Oscars: " + this.oscarsNumber + "\n Pofession: " + this.profession;
    };
    return Professional;
}());
exports.Professional = Professional;
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
