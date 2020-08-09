import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  childNotification: string;
  title = 'binding-custom-properties';
  getNotification(event) {
    this.childNotification = event;   
  }
}
