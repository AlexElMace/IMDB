
import {Movie} from "./classProfessional"

let movie1:Movie = new Movie("La piel que habito", 2011, "España", "Thriller Psicológico");
movie1.actors = [prof7];
movie1.director = [prof6];
movie1.writer = [prof6];
movie1.language = "Inglés"
movie1.platform = "Cine"
movie1.isMCU = false;
movie1.mainCharacterName = "Rusell Crowe"
movie1.producer = "Scott Free Productions"
movie1.distributor = "Universal Pictures"

console.log(movie1.toString())