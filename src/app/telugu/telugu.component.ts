import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeluguService } from '../telugu.service';

@Component({
  selector: 'app-telugu',
  templateUrl: './telugu.component.html',
  styleUrls: ['./telugu.component.css']
})
export class TeluguComponent implements OnInit {
  tarr:any;
  constructor( private sObj:Router,private tObj:TeluguService) { }

  ngOnInit(): void {
    this.tObj.getTeluguSongs().subscribe(
      tdata=>{
        this.tarr=tdata;
        console.log(this.tarr);
      },
      err=>{
        console.log('error in loading data',err)
      }
    )
  }

  onClick(id){
    this.sObj.navigateByUrl('/tsongs/'+id)
  }
 

}
