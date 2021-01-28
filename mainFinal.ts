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
                let titulo = respuesta1;
                let anyo = respuesta2;
                let nacionalidad = respuesta3;
                let genero = respuesta4;
                let movie:Movie = new Movie(titulo, parseInt(anyo), nacionalidad, genero);
                let imdb:Imdb = new Imdb([movie]);
                fs.writeFileSync("./pruebaMovie.json", JSON.stringify(imdb))
                imdb.escribirEnFicheroJSON("pruebaMovie.json")
                console.log(fs.readFileSync("./pruebaMovie.json", "utf-8"))
                rl.close();
            });
        });
    });
});

