import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { LanguageService } from '../language.service';

@Component({
  selector:'app-songs',
  templateUrl:'./songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit {

  songs:any;
  playStatus=false
  vol=false
  constructor(private ar:ActivatedRoute, private sObj:LanguageService) { }

  ngOnInit(): void {
    let lan=this.ar.snapshot.url[1].path; 
    let id=this.ar.snapshot.params.id;

    this.sObj.getSongsById(lan,id).subscribe(
      sdata=>{
        this.songs=sdata;
      },
      err=>{
        console.log('error in loading data',err.message)
      }
    )

  }
  
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
  currenttime="00:00:00";
  duration="00:00:00";
  seek=0
 

  streamObserver(audio){
    return new Observable(observer =>{
      this.audioObj.src=audio;
      this.audioObj.load();
      this.audioObj.play()

      const handler=(event:Event)=>{
        this.seek=this.audioObj.currentTime;
        this.currenttime=this.timeFormat(this.audioObj.currentTime);
        this.duration=this.timeFormat(this.audioObj.duration)
      }
      this.addEvent(this.audioObj, this.audioEvents, handler)
      return () =>{
        this.audioObj.currentTime=0;
       
      }
    });
  }
  addEvent(obj,events,handler){
    events.forEach(event =>{
      obj.addEventListener(event,handler);
    })
  }
  removeEvent(obj,events,handler){
    
  }

  setVolume(ev){
    this.audioObj.volume = ev.target.value
    if (this.audioObj.volume==0){
      this.vol=true
    }
    if (this.audioObj.volume!=0){
      this.vol=false
    }
  }
  openSong(audio){
    this.streamObserver(audio).subscribe(event=>{});
    this.playStatus=true
  }

  play(){
    this.audioObj.play();
    this.playStatus=true
  }
  pause(){
    this.audioObj.pause();
    this.playStatus=false

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
