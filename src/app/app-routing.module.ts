import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormoneComponent } from './formone/formone.component';
import { FormtwoComponent } from './formtwo/formtwo.component';
import { FormthreeComponent } from './formthree/formthree.component';
import { FormfourComponent } from './formfour/formfour.component';
import { FormfiveComponent } from './formfive/formfive.component';
import { FormsixComponent } from './formsix/formsix.component';
import { FormsevenComponent } from './formseven/formseven.component';
import { FormeightComponent } from './formeight/formeight.component';
import { FormnineComponent } from './formnine/formnine.component';


const routes: Routes = [
  { path:'', component: FormoneComponent },
  { path:'two', component: FormtwoComponent },
  { path:'three', component: FormthreeComponent },
  { path:'four', component: FormfourComponent },
  { path:'five', component: FormfiveComponent },
  { path:'six', component: FormsixComponent },
  { path:'seven', component: FormsevenComponent },
  { path:'eight', component: FormeightComponent },
  { path:'nine', component: FormnineComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
