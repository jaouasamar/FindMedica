import { Fournisseur } from "./fournisseur.model";
import { Pharmacie } from "./pharmacie.model";
import { Ville } from "./ville.model";

export class Medicament {
  id:Number | undefined;
	nom:String | undefined;
	prix:Number | undefined;
	quantite:Number| undefined;
  type_de_maladies:String| undefined;
	tranches_de_age:String| undefined;
  pharmacie: Pharmacie=new Pharmacie() ;
  fournisseurs:Array<Fournisseur>=new Array();
}
