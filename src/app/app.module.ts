import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { HttpClientModule } from '@angular/common/http';

import { FormoneComponent } from './formone/formone.component';
import { FormtwoComponent } from './formtwo/formtwo.component';
import { FormthreeComponent } from './formthree/formthree.component';
import { FormfourComponent } from './formfour/formfour.component';
import { FormfiveComponent } from './formfive/formfive.component';
import { FormsixComponent } from './formsix/formsix.component';
import { FormsevenComponent } from './formseven/formseven.component';
import { FormeightComponent } from './formeight/formeight.component';
import { FormnineComponent } from './formnine/formnine.component';

@NgModule({
  declarations: [
    AppComponent,
    FormoneComponent,
    FormtwoComponent,
    FormthreeComponent,
    FormfourComponent,
    FormfiveComponent,
    FormsixComponent,
    FormsevenComponent,
    FormeightComponent,
    FormnineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
