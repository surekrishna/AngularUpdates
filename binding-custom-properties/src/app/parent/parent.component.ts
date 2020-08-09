import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  @Output() notifyParent: EventEmitter<any> = new EventEmitter();

  employees = [
    {
      "id" : 1,
      "name" : "venkarao"
    },
    {
      "id" : 2,
      "name" : "subbarao"
    },
    {
      "id" : 3,
      "name" : "rangarao"
    }
  ];

  sendNotificaitonToParent() {
      this.notifyParent.emit('This is the message from child!');
  }

  constructor() { }

  ngOnInit(): void {
  }

}
