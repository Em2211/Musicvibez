import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  artists:any;
  constructor( private sObj:Router,private tObj:LanguageService) { }

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
  onClick(id){
    this.sObj.navigateByUrl('albums/artists/'+id)
  }

}
