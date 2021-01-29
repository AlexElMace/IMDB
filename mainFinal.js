"use strict";
exports.__esModule = true;
var classMovie_1 = require("./classMovie");
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
                var movie = new classMovie_1.Movie(respuesta1, parseInt(respuesta2), respuesta3, respuesta4);
                var imdbJSON = JSON.parse(fs.readFileSync("./imdbBBDD.json", "utf-8"));
                imdbJSON.peliculas.push(movie);
                fs.writeFileSync("./imdbBBDD.json", JSON.stringify(imdbJSON));
                rl.close();
            });
        });
    });
});
