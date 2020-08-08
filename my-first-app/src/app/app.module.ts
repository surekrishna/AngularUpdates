import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { DirectivesexamplesComponent } from './directivesexamples/directivesexamples.component';
import { StyleexamplesComponent } from './styleexamples/styleexamples.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    DirectivesexamplesComponent,
    StyleexamplesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
