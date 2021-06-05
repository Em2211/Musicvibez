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
  onSelectTelugu(){
    this.rObj.navigateByUrl('/home/telugu')
  }

  onSelectHindi(){
    this.rObj.navigateByUrl('/home/hindi')
  }

  onSelectTamil(){
    this.rObj.navigateByUrl('/home/tamil')
  }
  onSelectKannada(){
    this.rObj.navigateByUrl('/home/kannada')
  }
  
}
