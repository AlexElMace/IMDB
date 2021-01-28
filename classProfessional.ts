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

    public toString() {
        let i:number;
        let actores:string = "";
        console.log("Título: " + this.title)
        console.log("Año de lanzamiento: " + this.releaseYear)
        for (i=0; i<this.actors.length; i++) {
            actores += this.actors[i].name + ", ";
        }
        console.log("Actores: " + actores);
        console.log("Nacionalidad: " + this.nationality) 
        console.log("Director: " + this.director.name)
        console.log("Guionista: " + this.writer.name) 
        console.log("Idioma: " + this.language)
        console.log("Plataforma: " +  this.platform) 
        console.log("¿Pertenece al MCU?: " + this.isMCU) 
        console.log("Actor principal: " + this.mainCharacterName) 
        console.log("Productora: " + this.producer) 
        console.log("Distribuidora: " + this.distributor) 
        console.log("Género: " + this.genre);
    }
}
