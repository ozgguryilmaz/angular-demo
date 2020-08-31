import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  public firstName  = 'test app';
  public isDisabled = false;
  constructor() { }

  ngOnInit(): void {
  }

  welcomeUser(){
   return this.firstName + ' from method';
  }

  onClick(){
    alert('test app running!');
  }

}
