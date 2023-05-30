import { Component } from '@angular/core';
import { CarsService } from '../../services/cars.service';

@Component({
  selector: 'list-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent { 
  carsCargados:any[]=[];
  
  //inyectarlo propiedad e programacion orientada a objetos (inyeccion de dependencias)
  constructor(private carsServices:CarsService){}
  
  //para estar seguro que solo se usa en ese componente pomenos private
  ngOnInit(){
    this.getCars();
  }

  getCars(){
    this.carsServices.getCars().subscribe((cars:any)=>{//cars solo existe entre llaves
      this.carsCargados = cars,//por eso lo guardamos en una variable para poder sacar el cars y utilizarlo 
      console.log(this.carsCargados);
  })}
  //  this.carsServices.getCars().subscribe((cars:any)=>{//cars solo existe entre llaves
  //   this.carsCargados =cars,//por eso lo guardamos en una variable para poder sacar el cars y utilizarlo 
  //   console.log(this.carsCargados);

  getCarById(id:string){
    this.carsServices.getCarById(id).subscribe((result:any)=>{
      this.carsCargados = Object.values(result),
      console.log(this.carsCargados)
    })
  }
  }
