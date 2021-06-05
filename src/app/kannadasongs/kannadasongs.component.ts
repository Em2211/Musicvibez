import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { SongsService } from '../songs.service';

@Component({
  selector: 'app-kannadasongs',
  templateUrl: './kannadasongs.component.html',
  styleUrls: ['./kannadasongs.component.css']
})
export class KannadasongsComponent implements OnInit {

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
    this.sObj.getKannadaSongsByIdWise(id).subscribe(
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
