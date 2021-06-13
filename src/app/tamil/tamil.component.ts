import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-tamil',
  templateUrl: './tamil.component.html',
  styleUrls: ['./tamil.component.css']
})
export class TamilComponent implements OnInit {

  tamil:any;
  constructor( private sObj:Router,private tObj:LanguageService) { }
  ngOnInit(): void {
    this.tObj.getTamilSongs().subscribe(
      tdata=>{
        this.tamil=tdata;
      },
      err=>{
        console.log('error in loading data',err)
      }
    )
  }
  onClick(id){
    this.sObj.navigateByUrl('home/tamil/'+id)
  }

}
