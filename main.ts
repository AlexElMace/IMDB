import {Professional} from "./classProfessional";

let prof1 : Professional = new Professional("William Bradley Pitt", 57, "masculino", 1.80, 78, "rubio", "azules", "blanca", false, "estadounidense", 2, "actor y productor");
let prof2 : Professional = new Professional("George Timothy Clooney", 59, "masculino", 1.78, 80, "cano", "marrones", "blanca", false, "estadounidense", 2, "actor, director, productor y guionista");
let prof3 : Professional = new Professional("Clinton Eastwood, Jr.", 90, "masculino", 1.93, 75, "cano", "marrones", "blanca", false, "estadounidense", 12, "actor, director, músico y compositor");
let prof4 : Professional = new Professional("Jennifer Joanna Aniston", 51, "femenino", 1.62, 53, "rubio", "azules", "blanca", false, "estadounidense", 0, "actriz, directora y productora");
let prof5 : Professional = new Professional("Zoe Yadira Saldaña Nazario", 42, "femenino", 1.65, 69, "negro", "marrones", "afroamericana", false, "estadounidense", 0, "actriz y bailarina");
let prof6 : Professional = new Professional("Pedro Almodóvar Caballero", 71, "masculino", 1.71, 90, "cano", "marrones", "blanca", false, "española", 2, "director, actor, productor, guionista y cantante");
let prof7 : Professional = new Professional("Elena Anaya Gutiérrez", 45, "femenino", 1.65, 69, "castaño", "marron castaño y avellana", "blanca", false, "española", 0, "actriz");
let prof8 : Professional = new Professional("Natalia Gastiain Tena", 36, "femenino", 1.72, 70, "castaño", "verdes", "blanca", false, "británica", 0, "actriz y músico");
let prof9 : Professional = new Professional("Juan Antonio García Bayona", 45, "masculino", 1.70, 82, "moreno", "marron", "blanca", false, "española", 0, "director");
let prof10 : Professional = new Professional("Iciar Bollain Pérez-Mínguez", 53, "femenino", 1.55, 59, "pelirrojo", "verdes", "blanca", false, "española", 0, "actriz y directora");

console.log(prof1.professional());
console.log(prof2.professional());
console.log(prof3.professional());
console.log(prof4.professional());
console.log(prof5.professional());
console.log(prof6.professional());
console.log(prof7.professional());
console.log(prof8.professional());
console.log(prof9.professional());
console.log(prof10.professional());

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
