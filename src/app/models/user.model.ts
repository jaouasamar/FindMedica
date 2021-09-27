import { Region } from "./region.model"
import { Ville } from "./ville.model"

export class User {
id:Number | undefined
nom:String | undefined
prenom:String | undefined
dateNaissance:String | undefined
email:String | undefined
ville:Ville= new Ville();
adresse:String|undefined;
delegation:Region=new Region();
role:String | undefined
}
