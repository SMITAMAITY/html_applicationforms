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
import { FormtenComponent } from './formten/formten.component';
import { FormelevenComponent } from './formeleven/formeleven.component';
import { FormtwelveComponent } from './formtwelve/formtwelve.component';
import { FormthirteenComponent } from './formthirteen/formthirteen.component';
import { FormfourteenComponent } from './formfourteen/formfourteen.component';
import { FormfifteenComponent } from './formfifteen/formfifteen.component';
import { FormsixteenComponent } from './formsixteen/formsixteen.component';

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
    FormnineComponent,
    FormtenComponent,
    FormelevenComponent,
    FormtwelveComponent,
    FormthirteenComponent,
    FormfourteenComponent,
    FormfifteenComponent,
    FormsixteenComponent
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
