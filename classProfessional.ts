/*---Mini Proyecto de Fundamentos---*/

export class Movie {
    public title:string;
    public releaseYear:number;
    public actors:Professional[];
    public nationality:string;
    public director:Professional[];
    public writer:Professional[];
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
        return "Título: " + this.title + "\n" + 
        "Año de lanzamiento: " + this.releaseYear + "\n" + 
        "Actores: " + this.actors + "\n" + 
        "Nacionalidad: " + this.nationality + "\n" + 
        "Director: " + this.director + "\n" + 
        "Guionista: " + this.writer + "\n" + 
        "Idioma: " + this.language + "\n" + 
        "Plataforma: " +  this.platform+ "\n" + 
        "¿Pertenece al MCU?: " + this.isMCU + "\n" + 
        "Actor principal: " + this.mainCharacterName + "\n" + 
        "Productora: " + this.producer + "\n" + 
        "Distribuidora: " + this.distributor + "\n" + 
        "Género: " + +this.genre + "\n";
    }
}