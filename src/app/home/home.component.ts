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
  
  onSelectTelugu(id){
    this.rObj.navigateByUrl('/home/'+id)
  }
  onSelectHindi(id){
    this.rObj.navigateByUrl('/home/'+id)
  }
  onSelectTamil(id){
    this.rObj.navigateByUrl('/home/'+id)
  }
  onSelectKannada(id){
    this.rObj.navigateByUrl('/home/'+id)
  }
  
}
