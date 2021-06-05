import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-telugu',
  templateUrl: './telugu.component.html',
  styleUrls: ['./telugu.component.css']
})
export class TeluguComponent implements OnInit {
  telugu:any;
  constructor( private sObj:Router,private tObj:LanguageService) { }

  ngOnInit(): void {
    this.tObj.getTeluguSongs().subscribe(
      tdata=>{
        this.telugu=tdata;
      },
      err=>{
        console.log('error in loading data',err)
      }
    )
  }

  onClick(id){
    this.sObj.navigateByUrl('home/telugu/'+id)
  }
 

}
