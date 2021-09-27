import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pharmacie } from '../models/pharmacie.model';

@Injectable({
  providedIn: 'root'
})
export class PharmacieServiceService {

  private url=environment.url+"/pharmacie";


  constructor(private httpC :HttpClient) {}

  public getAll():Observable<Pharmacie[]>{
    return this.httpC.get<Pharmacie[]>(this.url);
  }

  public getById(i:Number):Observable<Pharmacie>{
    return this.httpC.get<Pharmacie>(this.url+"/"+i);
  }

  public post(pharma: Pharmacie):Observable<any>{
    return this.httpC.post<any>(this.url,pharma);
  }

  public update(medica: Pharmacie):Observable<any>{
    return this.httpC.put<any>(this.url,medica);
  }

  public delete(id:Number):Observable<any>{
    return this.httpC.delete<any>(this.url+'/'+id);
  }
}
