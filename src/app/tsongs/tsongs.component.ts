import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TsongsService } from '../tsongs.service';
import * as moment from 'moment';

@Component({
  selector: 'app-tsongs',
  templateUrl: './tsongs.component.html',
  styleUrls: ['./tsongs.component.css']
})
export class TsongsComponent implements OnInit {
  songs:any;
  audioObj=new Audio();
  audioEvents=[
    "ended",
    "error",
    "play",
    "playing",
    "pause",
    "timeUpdate",
    "canplay",
    "loadedmetadata",
    "loadstart"
  ]
 

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


  setVolume(ev){
    this.audioObj.volume = ev.target.value
    console.log(ev.target.value);
  }
  openSong(audio){
    this.audioObj.src=audio;
    this.audioObj.load();
    this.audioObj.play();
    console.log("button clicked")
  }

  play(){
    console.log("clicked play")
    this.audioObj.play();

  }
  pause(){
    this.audioObj.pause();

  }
  stop(){
    this.audioObj.pause();
    this.audioObj.currentTime=0;
  }

  timeFormat(time,format="HH:mm:ss"){
    const momentTime = time*1000;
    return moment.utc(momentTime).format(format);

  }
  
}

