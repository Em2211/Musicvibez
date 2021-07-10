import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private rObj:Router) { 

  }

  ngOnInit(): void {
  }
  
  onSelectLanguage(id){
    this.rObj.navigateByUrl('/home/'+id)
  }
  onSelect(id){
    this.rObj.navigateByUrl('/home/mood/'+id)
  }
  onSelectTophit(id){
    this.rObj.navigateByUrl('/home/tophits/'+id)
  }
  
}
