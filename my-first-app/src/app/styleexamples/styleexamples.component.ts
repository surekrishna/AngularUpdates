import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-styleexamples',
  templateUrl: './styleexamples.component.html',
  styleUrls: ['./styleexamples.component.css']
})
export class StyleexamplesComponent implements OnInit {
  
  serverStatus: string = 'offline';

  constructor() { 
    this.serverStatus = Math.random() > 0.5 ? 'offline' : 'online';
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }

  ngOnInit(): void {
  }

}
