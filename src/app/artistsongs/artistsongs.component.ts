import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { SongsService } from '../songs.service';

@Component({
  selector: 'app-artistsongs',
  templateUrl: './artistsongs.component.html',
  styleUrls: ['./artistsongs.component.css']
})
export class ArtistsongsComponent implements OnInit {

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

  constructor(private ar:ActivatedRoute, private tObj:SongsService) { }

  ngOnInit(): void {
    let id=this.ar.snapshot.params.id;
    this.tObj.getArtistSongsById(id).subscribe(
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
