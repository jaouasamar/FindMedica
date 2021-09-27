import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private url=environment.url + "/user";



  constructor(private httpC :HttpClient) {
  }

  public getAll():Observable<User[]>
  {
    return this.httpC.get<User[]>(this.url);
  }

  public getById(id:Number):Observable<User>{
    return this.httpC.get<any>(this.url+'/'+id);
  }

  public post(user: User):Observable<any>
  {
  return this.httpC.post<any>(this.url,user );
  }

  public delete(id:number): Observable<any>
  {
   return this.httpC.delete<any>(this.url+'/'+ id);
  }


  public update( user:User):Observable<any>
  {
  return this.httpC.put<any>(this.url,user);
  }
}
