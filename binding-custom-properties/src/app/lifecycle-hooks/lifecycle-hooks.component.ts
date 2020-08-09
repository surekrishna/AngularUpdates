import { Component, OnInit, OnChanges, SimpleChanges, Input, DoCheck, OnDestroy, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-lifecycle-hooks',
  templateUrl: './lifecycle-hooks.component.html',
  styleUrls: ['./lifecycle-hooks.component.css']
})
export class LifecycleHooksComponent implements 
OnInit, OnChanges, DoCheck, AfterContentInit,
 AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() element: {id: number, name: string};
  
  constructor() {
    console.log('constructor called!')
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called!')
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit called!')
  }

  ngDoCheck() {
    console.log('ngDoCheck called!')
  }

  ngAfterContentInit() {
    console.log('AfterContentInit called!')
  }

  ngAfterContentChecked() {
    console.log('AfterContentChecked called!')
  }

  ngAfterViewInit() {
    console.log('AfterViewInit called!')
  }  

  ngAfterViewChecked() {
    console.log('AfterViewChecked called!')
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called!')
  }

}
