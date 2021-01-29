import {Professional} from "./classProfessional";
import {Movie} from "./classMovie";
import {Imdb} from "./classImbd";

let prof1 : Professional = new Professional("William Bradley Pitt", 57, "cine", 1.80, 78, "rubio", "azules", "blanca", false, "estadounidense", 2, "actor y productor");
let prof2 : Professional = new Professional("George Timothy Clooney", 59, "cine", 1.78, 80, "cano", "marrones", "blanca", false, "estadounidense", 2, "actor, director, productor y guionista");
let prof3 : Professional = new Professional("Clinton Eastwood, Jr.", 90, "cine", 1.93, 75, "cano", "marrones", "blanca", false, "estadounidense", 12, "actor, director, músico y compositor");
let prof4 : Professional = new Professional("Jennifer Joanna Aniston", 51, "cine", 1.62, 53, "rubio", "azules", "blanca", false, "estadounidense", 0, "actriz, directora y productora");
let prof5 : Professional = new Professional("Zoe Yadira Saldaña Nazario", 42, "cine", 1.65, 69, "negro", "marrones", "afroamericana", false, "estadounidense", 0, "actriz y bailarina");
let prof6 : Professional = new Professional("Pedro Almodóvar Caballero", 71, "cine", 1.71, 90, "cano", "marrones", "blanca", false, "española", 2, "director, actor, productor, guionista y cantante");
let prof7 : Professional = new Professional("Elena Anaya Gutiérrez", 45, "cine", 1.65, 69, "castaño", "marron castaño y avellana", "blanca", false, "española", 0, "actriz");
let prof8 : Professional = new Professional("Natalia Gastiain Tena", 36, "cine", 1.72, 70, "castaño", "verdes", "blanca", false, "británica", 0, "actriz y músico");
let prof9 : Professional = new Professional("Juan Antonio García Bayona", 45, "cine", 1.70, 82, "moreno", "marron", "blanca", false, "española", 0, "director");
let prof10 : Professional = new Professional("Iciar Bollain Pérez-Mínguez", 53, "cine", 1.55, 59, "pelirrojo", "verdes", "blanca", false, "española", 0, "actriz y directora");

/*console.log(prof1.professional());
console.log(prof2.professional());
console.log(prof3.professional());
console.log(prof4.professional());
console.log(prof5.professional());
console.log(prof6.professional());
console.log(prof7.professional());
console.log(prof8.professional());
console.log(prof9.professional());
console.log(prof10.professional());*/

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

let arrayMov:Movie[] = [movie1, movie2, movie3, movie4, movie5, movie6, movie7, movie8, movie9, movie10];
let imdb1:Imdb = new Imdb(arrayMov);

import * as fs from "fs"
const objetoJSON = JSON.stringify(imdb1);
fs.writeFileSync("./imdbBBDD.json", objetoJSON)
let imbdJSON:Imdb = JSON.parse(fs.readFileSync("./imdbBBDD.json", "utf-8"));
