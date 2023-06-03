import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsComponent } from './pages/cars/cars.component';
import { HeaderComponent } from './components/header/header.component';
import { CarbyidComponent } from './pages/carbyid/carbyid.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    CarsComponent,
    HeaderComponent,
    CarbyidComponent,
    
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:[
    CarsComponent,
    HeaderComponent,
    CarbyidComponent
  ]
})
export class DashboardModule { }
