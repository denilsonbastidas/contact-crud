import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class MethodsService {
  public url: string;
  constructor(
    private _http:HttpClient,
  ) { 
    this.url = 'http://localhost:2200/api/contacts/';
  }

  create(user:any):Observable<any>{
    const header = new HttpHeaders().set('content-type', 'application/json');
    const params = JSON.stringify(user);
    return this._http.post(this.url, params, {headers:header});
  }
  listContact():Observable<any>{
    const header = new HttpHeaders().set('content-type', 'application/json');
    return this._http.get(this.url, {headers:header});
  }
  deleteContact(id:string):Observable<any>{
    const header = new HttpHeaders().set('content-type', 'application/json');
    return this._http.delete(this.url+id,{headers:header});
  }
  editContact(id:any,contact:any):Observable<any>{
    const params = JSON.stringify(contact);
    const header = new HttpHeaders().set('content-type', 'application/json');
    return this._http.put(this.url+id,params,{headers:header});
  }
}
