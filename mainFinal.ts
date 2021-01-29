import {Professional} from "./classProfessional";
import {Movie} from "./classMovie";
import {Imdb} from "./classImbd";
import * as fs from "fs";
import { resolve } from "path";

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/*var titulo:string = "";
var anyo:string = "";
var nacionalidad:string = "";
var genero:string = "";*/

rl.question("Introduce el nombre de una película: ", (respuesta1) => {
    rl.question("Introduce el año  de lanzamiento de la película: ", (respuesta2) => {
        rl.question("Introduce la nacionalidad de la película: ", (respuesta3) => {
            rl.question("Introduce el género de la película: ", (respuesta4) => {
                let movie:Movie = new Movie(respuesta1, parseInt(respuesta2), respuesta3, respuesta4);
                let imdbJSON:Imdb = new Imdb([]);
                imdbJSON = imdbJSON.obtenerInstanciaIMDB("imdbBBDD.json")
                imdbJSON.peliculas.push(movie)
                console.log(imdbJSON)
                imdbJSON.escribirEnFicheroJSON("imdbBBDD.json");
                rl.close();
            });
        });
    });
});

