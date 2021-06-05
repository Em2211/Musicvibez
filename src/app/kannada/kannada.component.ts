import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-kannada',
  templateUrl: './kannada.component.html',
  styleUrls: ['./kannada.component.css']
})
export class KannadaComponent implements OnInit {

  kannada:any;
  constructor( private sObj:Router,private tObj:LanguageService) { }

  ngOnInit(): void {
    this.tObj.getKannadaSongs().subscribe(
      tdata=>{
        this.kannada=tdata;
      },
      err=>{
        console.log('error in loading data',err)
      }
    )
  }
  onClick(id){
    this.sObj.navigateByUrl('home/kannada/'+id)
  }
 

}
