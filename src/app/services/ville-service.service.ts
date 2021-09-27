import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Ville } from '../models/ville.model';

@Injectable({
  providedIn: 'root'
})
export class VilleServiceService {

  private url=environment.url + "/ville";

  constructor(private httpC :HttpClient) {
  }

  public getAll():Observable<Ville[]>
  {
    return this.httpC.get<Ville[]>(this.url);
  }
  public getById(id:Number):Observable<Ville>{
    return this.httpC.get<any>(this.url+'/'+id);
  }

  public post(ville: Ville):Observable<any>
  {
  return this.httpC.post<any>(this.url,ville );
  }

  public delete(id:number): Observable<any>
  {
   return this.httpC.delete<any>(this.url+'/'+ id);
  }


  public update( ville:Ville):Observable<any>
  {
  return this.httpC.put<any>(this.url,ville);
  }
}
