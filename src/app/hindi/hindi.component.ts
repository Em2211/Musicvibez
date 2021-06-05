import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-hindi',
  templateUrl: './hindi.component.html',
  styleUrls: ['./hindi.component.css']
})
export class HindiComponent implements OnInit {

 hindi:any;
  constructor( private sObj:Router,private tObj:LanguageService) { }

  ngOnInit(): void {
    this.tObj.getHindiSongs().subscribe(
      tdata=>{
        this.hindi=tdata;
      },
      err=>{
        console.log('error in loading data',err)
      }
    )
  }
  onClick(id){
    this.sObj.navigateByUrl('home/hindi/'+id)
  }
 

  
}
