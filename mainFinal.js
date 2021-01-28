"use strict";
exports.__esModule = true;
var classMovie_1 = require("./classMovie");
var classImbd_1 = require("./classImbd");
var fs = require("fs");
var readline = require("readline");
var rl = readline.createInterface(process.stdin, process.stdout);
/*var titulo:string = "";
var anyo:string = "";
var nacionalidad:string = "";
var genero:string = "";*/
rl.question("Introduce el nombre de una película: ", function (respuesta1) {
    rl.question("Introduce el año  de lanzamiento de la película: ", function (respuesta2) {
        rl.question("Introduce la nacionalidad de la película: ", function (respuesta3) {
            rl.question("Introduce el género de la película: ", function (respuesta4) {
                var titulo = respuesta1;
                var anyo = respuesta2;
                var nacionalidad = respuesta3;
                var genero = respuesta4;
                var movie = new classMovie_1.Movie(titulo, parseInt(anyo), nacionalidad, genero);
                var imdb = new classImbd_1.Imdb([movie]);
                fs.writeFileSync("./pruebaMovie.json", JSON.stringify(imdb));
                imdb.escribirEnFicheroJSON("pruebaMovie.json");
                console.log(fs.readFileSync("./pruebaMovie.json", "utf-8"));
                rl.close();
            });
        });
    });
});
