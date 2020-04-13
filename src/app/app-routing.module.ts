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
import { FormtenComponent } from './formten/formten.component';
import { FormelevenComponent } from './formeleven/formeleven.component';
import { FormtwelveComponent } from './formtwelve/formtwelve.component';
import { FormthirteenComponent } from './formthirteen/formthirteen.component';
import { FormfourteenComponent } from './formfourteen/formfourteen.component';
import { FormfifteenComponent } from './formfifteen/formfifteen.component';
import { FormsixteenComponent } from './formsixteen/formsixteen.component';


const routes: Routes = [
  { path:'', component: FormoneComponent },
  { path:'two', component: FormtwoComponent },
  { path:'three', component: FormthreeComponent },
  { path:'four', component: FormfourComponent },
  { path:'five', component: FormfiveComponent },
  { path:'six', component: FormsixComponent },
  { path:'seven', component: FormsevenComponent },
  { path:'eight', component: FormeightComponent },
  { path:'nine', component: FormnineComponent },
  { path:'ten', component: FormtenComponent },
  { path:'eleven', component: FormelevenComponent },
  { path:'twelve', component: FormtwelveComponent },
  { path:'thirteen', component: FormthirteenComponent },
  { path:'fourteen', component: FormfourteenComponent },
  { path:'fifteen', component: FormfifteenComponent },
  { path:'sixteen', component: FormsixteenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
