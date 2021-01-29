"use strict";
exports.__esModule = true;
exports.Imdb = void 0;
var fs = require("fs");
var Imdb = /** @class */ (function () {
    function Imdb(peliculas) {
        this.peliculas = peliculas;
    }
    Imdb.prototype.escribirEnFicheroJSON = function (nombreFichero) {
        fs.writeFileSync(nombreFichero, JSON.stringify(this.peliculas));
    };
    Imdb.prototype.obtenerInstanciaIMDB = function (nombreFichero) {
        var imdb = new Imdb([]);
        imdb.peliculas = JSON.parse(fs.readFileSync(nombreFichero, "utf-8"));
        return imdb;
    };
    return Imdb;
}());
exports.Imdb = Imdb;
