import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-template-local-reference',
  templateUrl: './template-local-reference.component.html',
  styleUrls: ['./template-local-reference.component.css']
})
export class TemplateLocalReferenceComponent implements OnInit {

  //method - 1
  @ViewChild('localVariableCanUseAnyWhereInThisTemplate') anotherWayOfAccessingName: ElementRef;

  //method - 2
  name: any;
  getName(name: HTMLInputElement) {
    console.log(this.anotherWayOfAccessingName.nativeElement.value);
    console.log(name.value);
    this.name = name.value;
  }

  constructor() { }

  ngOnInit(): void {
  }
  
}
