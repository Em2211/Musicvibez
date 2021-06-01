import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TsongsService {

  constructor(private hc:HttpClient) { }
  getSongs():Observable<any>{

    return this.hc.get<any>('http://localhost:3000/telugu')
  }
  getSongsByIdWise(id):Observable<any>{
      
    return this.hc.get<any>('http://localhost:3000/users/'+id)
  }

}
