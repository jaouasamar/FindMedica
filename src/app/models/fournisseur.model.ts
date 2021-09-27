import { Medicament } from "./medicament.model";
import { Pharmacie } from "./pharmacie.model";
import { Ville } from "./ville.model";

export class Fournisseur {
  id: Number | undefined;
	nom:String | undefined;
	adresse:String | undefined;
	email:String | undefined;
  ville:Ville = new Ville();
  medicaments:Array<Medicament>=new Array();
  pharmacies:Array<Pharmacie>=new Array();


}
