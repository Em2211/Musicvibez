import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TeluguService {

  constructor(private hc:HttpClient) { }
  getTeluguSongs():Observable<any>{

    return this.hc.get<any>('http://localhost:3000/telugu')
  }

}
