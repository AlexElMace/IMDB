
import {Movie} from "./classProfessional"

let movie1:Movie = new Movie("Gladiator", 2000, "Estados Unidos", "Acción");
movie1.actors = [prof1, prof2, prof3, prof4, prof5, prof6, prof7, prof8, prof9, prof10];
movie1.director = [prof1, prof2, prof3, prof4, prof5, prof6, prof7, prof8, prof9, prof10];
movie1.writer = [prof1, prof2, prof3, prof4, prof5, prof6, prof7, prof8, prof9, prof10];
movie1.language = "Inglés"
movie1.platform = "Cine"
movie1.isMCU = false;
movie1.mainCharacterName = "Rusell Crowe"
movie1.producer = "Scott Free Productions"
movie1.distributor = "Universal Pictures"

console.log(movie1.toString())