import {Professional} from "./classProfessional";
import {Movie} from "./classMovie";
import {Imdb} from "./classImbd";
import * as fs from "fs";
import * as readline from "readline";
import { resolve } from "path";

let rl = readline.createInterface(process.stdin, process.stdout);


/*var titulo:string = "";
var anyo:string = "";
var nacionalidad:string = "";
var genero:string = "";*/

rl.question("Introduce el nombre de una película: ", (respuesta1) => {
    rl.question("Introduce el año  de lanzamiento de la película: ", (respuesta2) => {
        rl.question("Introduce la nacionalidad de la película: ", (respuesta3) => {
            rl.question("Introduce el género de la película: ", (respuesta4) => {
                let movie:Movie = new Movie(respuesta1, parseInt(respuesta2), respuesta3, respuesta4);
                let imdbJSON:Imdb = JSON.parse(fs.readFileSync("./imdbBBDD.json", "utf-8"))
                imdbJSON.peliculas.push(movie)
                fs.writeFileSync("./imdbBBDD.json", JSON.stringify(imdbJSON))
                rl.close();
            });
        });
    });
});

