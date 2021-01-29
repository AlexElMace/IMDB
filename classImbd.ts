import {Movie} from "./classMovie";

import * as fs from "fs"

export class Imdb {
    public peliculas:Movie[];

    constructor(peliculas:Movie[]) {
        this.peliculas = peliculas
    }
    
    public escribirEnFicheroJSON(nombreFichero:string) {
        fs.writeFileSync(nombreFichero, JSON.stringify(this.peliculas))
    }

    public obtenerInstanciaIMDB(nombreFichero:string):Imdb {
        let imdb:Imdb = new Imdb([]);
        imdb.peliculas = JSON.parse(fs.readFileSync(nombreFichero, "utf-8"));
        return imdb
    
    }
}