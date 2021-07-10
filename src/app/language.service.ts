import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor(private hc:HttpClient) { }
  getLanguageMovies(id):Observable<any>{
    return this.hc.get<any>('http://localhost:3000/'+id)
  }
  getSongsById(lan,id):Observable<any>{
    return this.hc.get<any>(`http://localhost:3000/${lan}/`+id)
  }
  
  getArtists():Observable<any>{
    return this.hc.get<any>('http://localhost:3000/artists')
  }
  
  getArtistSongsById(id):Observable<any>{
    return this.hc.get<any>('http://localhost:3000/artists/'+id)
  }

  getSongsByGenre(id):Observable<any>{
    return this.hc.get<any>('http://localhost:3000/genre/'+id)
  }
  
  getTophitSongs(id):Observable<any>{
    return this.hc.get<any>('http://localhost:3000/tophits/'+id)
  }
}
