import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivesexamples',
  templateUrl: './directivesexamples.component.html',
  styleUrls: ['./directivesexamples.component.css']
})
export class DirectivesexamplesComponent implements OnInit {

  servers = ['server-1', 'server-1', 'server-3'];
  serverName: string = "Test";
  serverCreationStatus = "No Server created!";
  isServerCreated: boolean = false;

  onCreateServer() {
    this.isServerCreated = true;
    this.serverCreationStatus = "Server was created with name = " + this.serverName;
  }

  updateServerCreated() {
    this.isServerCreated = false;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
