import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TsongsService } from '../tsongs.service';

@Component({
  selector: 'app-tsongs',
  templateUrl: './tsongs.component.html',
  styleUrls: ['./tsongs.component.css']
})
export class TsongsComponent implements OnInit {
  songs:any;

  constructor(private ar:ActivatedRoute, private tObj:TsongsService) { }

  ngOnInit(): void {
    let id=this.ar.snapshot.params.id;
    this.tObj.getSongsByIdWise(id).subscribe(
      sdata=>{
        this.songs=sdata;
        console.log(this.songs);
      },
      err=>{
        console.log('error in loading data',err)
      }
    )
  }
}
