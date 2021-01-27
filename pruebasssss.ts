class Movie {
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

    public setLanguage(newLanguage) {
        this.nationality = newLanguage;
    }

    public toString():string {
        return "Título: " + this.title + "\n" + 
        "Año de lanzamiento: " + this.releaseYear + "\n" + 
        "Actores: " + + "\n" + 
        "Nacionalidad: " + this.nationality + "\n" + 
        "Director: " + + "\n" + 
        "Guionista: " + + "\n" + 
        "Idioma: " + + "\n" + 
        "Plataforma: " + + "\n" + 
        "¿Pertenece al MCU?: " + + "\n" + 
        "Actor principal: " + + "\n" + 
        "Productora: " + + "\n" + 
        "Distribuidora: " + + "\n" + 
        "Género: " + + "\n" + 
    }
}