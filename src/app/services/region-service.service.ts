import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Region } from '../models/region.model';

@Injectable({
  providedIn: 'root'
})
export class RegionServiceService {

  private url=environment.url+'/region';


  constructor(private httpC:HttpClient) { }

  public getAll():Observable<Region[]>{
    return this.httpC.get<Region[]>(this.url);
  }
  public getById(id:Number):Observable<Region>{
    return this.httpC.get<any>(this.url+'/'+id);
  }
  public post(regi:Region):Observable<any>{
    return this.httpC.post<any>(this.url,regi);
  }

  public put(regi:Region):Observable<any>
  {
    return this.httpC.put<any>(this.url,regi);
  }
  public delete(id:Number)
  {
    return this.httpC.delete<any>(this.url+'/'+id);
  }

}
