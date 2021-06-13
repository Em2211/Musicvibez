import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SongsService {

  constructor(private hc:HttpClient) { }
  getTeluguSongsById(id):Observable<any>{
      
    return this.hc.get<any>('http://localhost:3000/telugu/'+id)
  }
  getHindiSongsById(id):Observable<any>{
      
    return this.hc.get<any>('http://localhost:3000/hindi/'+id)
  }
  getTamilSongsById(id):Observable<any>{
      
    return this.hc.get<any>('http://localhost:3000/tamil/'+id)
  }
  getKannadaSongsById(id):Observable<any>{
      
    return this.hc.get<any>('http://localhost:3000/kannada/'+id)
  }
  getArtistSongsById(id):Observable<any>{
      
    return this.hc.get<any>('http://localhost:3000/artists/'+id)
  }
  

}
