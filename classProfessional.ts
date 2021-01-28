/*---Mini Proyecto de Fundamentos---*/

export class Movie {
    public title:string;
    public releaseYear:number;
    public actors:Professional[];
    public nationality:string;
    public director:Professional;
    public writer:Professional;
    public language:string;
    public platform:string;
    public isMCU:boolean;
    public mainCharacterName:string;
    public producer:string;
    public distributor:string;
    public genre:string;

    constructor (title:string, releaseYear:number, nationality:string, genre:string) {
        this.title = title;
        this.releaseYear = releaseYear;
        this.nationality = nationality;
        this.genre = genre;
    }

    public toString():string {
        let i;
        let actores = "";
        for (i=0; i<this.actors.length; i++) {
            actores += this.actors[i].name + ", ";
        }
        return actores;
        console.log("Título: " + this.title) + 
        console.log("Año de lanzamiento: " + this.releaseYear) + 
        console.log("Actores: " + actores) + 
        console.log("Nacionalidad: " + this.nationality) + 
        return "Director: " + this.director.name + "\n" + 
        return "Guionista: " + this.writer.name + "\n" + 
        console.log("Idioma: " + this.language + "\n") + 
        console.log("Plataforma: " +  this.platform) + 
        console.log("¿Pertenece al MCU?: " + this.isMCU) + 
        console.log("Actor principal: " + this.mainCharacterName) + 
        console.log("Productora: " + this.producer) + 
        console.log("Distribuidora: " + this.distributor) + 
        console.log("Género: " + this.genre);
    }
}
