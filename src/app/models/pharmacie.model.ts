import { Medicament } from "./medicament.model";
import { User } from "./user.model";
import { Ville } from "./ville.model";

export class Pharmacie {
id:Number| undefined;
nom:String | undefined;
adresse:String | undefined;
ville:Ville=new Ville();
medicaments:Array<Medicament>=new Array();
user:User=new User();
}
