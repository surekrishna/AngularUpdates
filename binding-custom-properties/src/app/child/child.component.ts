import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() element: {id: number, name: string};

  //specific name we want to get data we use @Input('property-binding-name-here')
  //@Input('parent-to-child-data-binding') element: {id: number, name: string};
  //<app-child *ngFor="let employee of employees" [element]="parent-to-child-data-binding"></app-child>

  constructor() { }

  ngOnInit(): void {
  }

}
