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

    constructor(name, age, genre, weight, height, hairColor, eyeColor, race, isRetired, nationality, oscarsNumber, profession) {
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