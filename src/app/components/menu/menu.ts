export interface Menu{
  id?:String;
  titre?:String;
  icon?:String;
  url?:String;
  active?: boolean;
  sousMenu?:Array<Menu>;

}
