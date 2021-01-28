"use strict";
exports.__esModule = true;
exports.Imdb = void 0;
var fs = require("fs");
var Imdb = /** @class */ (function () {
    function Imdb(peliculas) {
        this.peliculas = peliculas;
    }
    Imdb.prototype.escribirEnFicheroJSON = function (nombreFichero) {
        fs.writeFileSync("./imdbBBDD.json", nombreFichero);
    };
    Imdb.prototype.obtenerInstanciaIMDB = function (nombreFichero) {
        return JSON.parse(fs.readFileSync(nombreFichero, "utf-8"));
    };
    return Imdb;
}());
exports.Imdb = Imdb;
