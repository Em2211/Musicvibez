import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit {
  searchTerm:string;
  languages:any;
  constructor( private sObj:Router,private tObj:LanguageService,private ar:ActivatedRoute) { }
  ngOnInit(): void {
    let lan=this.ar.snapshot.url[1].path; 
    this.tObj.getLanguageMovies(lan).subscribe(
      mdata=>{
        this.languages=mdata;
      },
      err=>{
        console.log('error in loading data',err)
      }
    )
  }

  onClick(lan,id){
    this.sObj.navigateByUrl(`home/${lan}/`+id)
  }

}
