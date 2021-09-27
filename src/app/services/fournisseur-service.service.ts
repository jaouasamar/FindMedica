import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Fournisseur } from '../models/fournisseur.model';

@Injectable({
  providedIn: 'root'
})
export class FournisseurServiceService {

  private url=environment.url+"/fournisseur";


  constructor(private httpC :HttpClient) { }

  public getAll():Observable<Fournisseur[]>{
    return this.httpC.get<Fournisseur[]>(this.url);
  }

  public getById(id:Number):Observable<Fournisseur>{
    if(id)
    {
      return this.httpC.get<any>(this.url+'/'+id);
    }
    return of();


  }

  public post(fourniss: Fournisseur):Observable<any>{
    return this.httpC.post<any>(this.url,fourniss);
  }

  public update(fourniss: Fournisseur):Observable<any>{
    return this.httpC.put<any>(this.url,fourniss);
  }

  public delete(id:Number):Observable<any>{
    return this.httpC.delete<any>(this.url+'/'+id);
  }
}
