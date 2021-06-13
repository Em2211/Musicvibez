import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SongsService } from '../songs.service';
import * as moment from 'moment';

@Component({
  selector: 'app-hsongs',
  templateUrl: './hsongs.component.html',
  styleUrls: ['./hsongs.component.css']
})
export class HsongsComponent implements OnInit {
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
 

  constructor(private ar:ActivatedRoute, private sObj:SongsService) { }

  ngOnInit(): void {
    let id=this.ar.snapshot.params.id;
    this.sObj.getHindiSongsById(id).subscribe(
      sdata=>{
        this.songs=sdata;
      },
      err=>{
        console.log('error in loading data',err)
      }
    )
  }


  setVolume(ev){
    this.audioObj.volume = ev.target.value
  }
  openSong(audio){
    this.audioObj.src=audio;
    this.audioObj.load();
    this.audioObj.play();
  }

  play(){
    if (!this.audioObj.onplaying){
      this.audioObj.play();
    }

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
