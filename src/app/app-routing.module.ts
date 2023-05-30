import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarbyidComponent } from './dashboard/pages/carbyid/carbyid.component';

const routes: Routes = [
  
  {path:'getbyid', component:CarbyidComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
