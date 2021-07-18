import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService } from '../language.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  artists:any;
  constructor(private rObj:Router, private tObj:LanguageService) { 

  }

  ngOnInit(): void {
    this.tObj.getArtists().subscribe(
      adata=>{
        this.artists=adata;
      },
      err=>{
        console.log('error in loading data',err)
      }
    )
  }
  
  onSelectLanguage(id){
    this.rObj.navigateByUrl('/home/'+id)
  }
  onSelect(id){
    this.rObj.navigateByUrl('/home/mood/'+id)
  }
  onSelectTophit(id){
    this.rObj.navigateByUrl('/home/tophits/'+id)
  }
  onClick(id){
    this.rObj.navigateByUrl('home/artists/'+id)
  }

  
}
