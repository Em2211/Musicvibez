import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SongsService {

  constructor(private hc:HttpClient) { }
  getSongsByIdWise(id):Observable<any>{
      
    return this.hc.get<any>('http://localhost:3000/telugu/'+id)
  }
  getHindiSongsByIdWise(id):Observable<any>{
      
    return this.hc.get<any>('http://localhost:3000/hindi/'+id)
  }
  getTamilSongsByIdWise(id):Observable<any>{
      
    return this.hc.get<any>('http://localhost:3000/tamil/'+id)
  }
  getKannadaSongsByIdWise(id):Observable<any>{
      
    return this.hc.get<any>('http://localhost:3000/kannada/'+id)
  }
  

}
