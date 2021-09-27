import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Medicament } from '../models/medicament.model';
import { Pharmacie } from '../models/pharmacie.model';

@Injectable({
  providedIn: 'root'
})
export class MedicamentServiceService {

  private url=environment.url+"/medicament";


  constructor(private httpC :HttpClient) { }

  public getAll():Observable<Medicament[]>{
    return this.httpC.get<Medicament[]>(this.url);
  }
  public getPharmacies(): Observable<Pharmacie[]>{

      return this.httpC.get<[Pharmacie]>(this.url);
  }
 public post(medica: Medicament):Observable<any>{
    return this.httpC.post<any>(this.url,medica);
  }

  public update(medica: Medicament):Observable<any>{
    return this.httpC.put<any>(this.url,medica);
  }

  public delete(id:Number):Observable<any>{
    return this.httpC.delete<any>(this.url+'/'+id);
  }

  public getById(id:Number):Observable<Medicament>{
    return this.httpC.get<any>(this.url+'/'+id);
  }

}
