
import {Movie} from "./classProfessional"

let movie1:Movie = new Movie("La piel que habito", 2011, "España", "Thriller Psicológico");
movie1.actors = [prof7];
movie1.director = prof6;
movie1.writer = prof6;
movie1.language = "Español"
movie1.platform = "Cine"
movie1.isMCU = false;
movie1.mainCharacterName = "Antonio Banderas"
movie1.producer = "El Deseo P.C"
movie1.distributor = "Warners España"

console.log(movie1.toString())