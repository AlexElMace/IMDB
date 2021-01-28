export class Professional {
    public name:string;
    public age:number;
    public genre:string;
    public weight:number;
    public height:number;
    public hairColor:string;
    public eyeColor:string;
    public race:string;
    public isRetired:boolean;
    public nationality:string;
    public oscarsNumber:number;
    public profession:string;

    constructor(name:string, age:number, genre:string, weight:number, height:number, hairColor:string, eyeColor:string, race:string, isRetired:boolean, nationality:string, oscarsNumber:number, profession:string) {
        this.name = name;
        this.age = age;
        this.genre = genre;
        this.weight = weight;
        this.height = height;
        this.hairColor = hairColor;
        this.eyeColor = eyeColor;
        this.race = race;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarsNumber = oscarsNumber;
        this.profession = profession;
    }

    public professional() {
        return "Name: " + this.name + "\n Age: " + this.age + "\n Genre: " + this.genre + "\n Weight: " + this.weight + "\n Height: " + this.height + "\n Hair color: " + this.hairColor + "\n Eye color: " + this.eyeColor + "\n Race: " + this.race + "\n Retired: " + this.isRetired + "\n Nationality: " + this.nationality + "\n Oscars: " + this.oscarsNumber + "\n Pofession: " + this.profession;
    }
}
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
        "Género: " + this.genre + "\n";
    }
}