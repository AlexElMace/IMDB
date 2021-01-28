
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

let movie2:Movie = new Movie("Quemar Después de Leer", 2008, "Estados Unidos", "Comedia");

movie1.actors = [prof1, prof2];
movie1.director = prof3;
movie1.writer = prof3;
movie1.language = "Inglés"
movie1.platform = "Cine"
movie1.isMCU = false;
movie1.mainCharacterName = "George Clooney"
movie1.producer = "Relativity Media"
movie1.distributor = "	Focus Features"

let movie3:Movie = new Movie("Érase una vez en Hollywood", 2019, "Estado Unidos", "Humor Negro");

movie1.actors = [prof1, prof2, prof3];
movie1.director = prof9;
movie1.writer = prof3;
movie1.language = "Inglés"
movie1.platform = "Cine"
movie1.isMCU = false;
movie1.mainCharacterName = "Leonardo DiCaprio"
movie1.producer = "Columbia Pictures"
movie1.distributor = "Sony Pictures"

let movie4:Movie = new Movie("Snatch: Cerdos y diamantes", 2000, "Reino Unido", "Suspense");

movie1.actors = [prof1, prof3, prof8];
movie1.director = prof6;
movie1.writer = prof3;
movie1.language = "Inglés"
movie1.platform = "Cine"
movie1.isMCU = false;
movie1.mainCharacterName = "Brad Pitt"
movie1.producer = "Columbia Pictures"
movie1.distributor = "Columbia Tri-Star"

let movie5:Movie = new Movie("Gladiator", 2000, "Estados Unidos", "Acción");

movie1.actors = [prof2, prof5];
movie1.director = prof6;
movie1.writer = prof10;
movie1.language = "Inglés"
movie1.platform = "Cine"
movie1.isMCU = false;
movie1.mainCharacterName = "Rusell Crowe"
movie1.producer = "	Scott Free Productions"
movie1.distributor = "DreamWorks "

let movie6:Movie = new Movie("Un monstruo viene a verme", 2016, "España", "Drama");

movie1.actors = [prof5, prof7, prof8];
movie1.director = prof9;
movie1.writer = prof9;
movie1.language = "Español"
movie1.platform = "Cine"
movie1.isMCU = false;
movie1.mainCharacterName = "Liam Neeson"
movie1.producer = "Apaches Entertainment"
movie1.distributor = "Universal Pictures"

let movie7:Movie = new Movie("Torrente", 2003, "España", "Comedia");

movie1.actors = [prof1];
movie1.director = prof3;
movie1.writer = prof6;
movie1.language = "Español"
movie1.platform = "Cine"
movie1.isMCU = false;
movie1.mainCharacterName = "Santiago Segura"
movie1.producer = "Atletico de Madrid F.C"
movie1.distributor = "El Fary"

let movie8:Movie = new Movie("Vengadores", 2012, "Estados Unidos", "Acción");

movie1.actors = [prof1, prof7];
movie1.director = prof1;
movie1.writer = prof1;
movie1.language = "Inglés"
movie1.platform = "Cine"
movie1.isMCU = true;
movie1.mainCharacterName = "Robert Downey Jr."
movie1.producer = "Marvel Studios"
movie1.distributor = "Walt Disney Studios"

let movie9:Movie = new Movie("Juego de Tronos", 2011, "Estados Unidos", "Fantasía");

movie1.actors = [prof7, prof8, prof9];
movie1.director = prof6;
movie1.writer = prof6;
movie1.language = "Inglés"
movie1.platform = "Serie"
movie1.isMCU = false;
movie1.mainCharacterName = "Emilia Clarke"
movie1.producer = "Generator Entertainment"
movie1.distributor = "HBO"

let movie10:Movie = new Movie("Peaky Blinders", 2013, "Reino Unido", "Historia Ficticia");

movie1.actors = [prof1, prof2, prof4];
movie1.director = prof3;
movie1.writer = prof10;
movie1.language = "Inglés"
movie1.platform = "Serie"
movie1.isMCU = false;
movie1.mainCharacterName = "Cillian Murphy"
movie1.producer = "Tiger Aspect Productions"
movie1.distributor = "BBC"

/*console.log(movie1.toString())*/

let arrayMov:Movie[] = [movie1, movie2, movie3, movie4, movie5, movie6, movie7, movie8, movie9, movie10];
let imbd1:Imbd = new Imbd(arrayMov);