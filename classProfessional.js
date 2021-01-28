"use strict";
exports.__esModule = true;
exports.Professional = void 0;
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
<<<<<<< HEAD
=======
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
        console.log(actores);
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
>>>>>>> 299e948ed13102fa0c1e11f5c274b1186086e9c0
