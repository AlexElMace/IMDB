import {Movie} from "./classMovie";

import * as fs from "fs"

export class Imdb {
    public peliculas:Movie[];

    constructor(peliculas:Movie[]) {
        this.peliculas = peliculas
    }
    
    public escribirEnFicheroJSON(nombreFichero:string) {
        fs.writeFileSync("./imdbBBDD.json", nombreFichero)
    }

    public obtenerInstanciaIMDB(nombreFichero:string):Imdb {
        return JSON.parse(fs.readFileSync(nombreFichero, "utf-8"));
    }
}