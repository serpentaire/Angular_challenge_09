export class Chatons {
  id: number;
  nom: String;
  race: String;
  image: String;
  dateNaissance: Date;

  constructor(
    id: number,
    nom: String,
    race: String,
    image: String,
    dateNaissance: Date,
  ) {
    this.id = id;
    this.nom = nom;
    this.race = race;
    this.image = image;
    this.dateNaissance = dateNaissance;
  }
}
