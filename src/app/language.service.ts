import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor(private hc:HttpClient) { }
  getTeluguSongs():Observable<any>{
    return this.hc.get<any>('http://localhost:3000/telugu')
  }
  getHindiSongs():Observable<any>{
    return this.hc.get<any>('http://localhost:3000/hindi')
  }
  getTamilSongs():Observable<any>{
    return this.hc.get<any>('http://localhost:3000/tamil')
  }
  getKannadaSongs():Observable<any>{
    return this.hc.get<any>('http://localhost:3000/kannada')
  }
  getArtists():Observable<any>{
    return this.hc.get<any>('http://localhost:3000/artists')
  }



}
