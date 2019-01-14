import { Component, OnInit } from '@angular/core';
import { CarService } from '../service/car.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  public cars = [];

  constructor(private _carService: CarService) { }

  ngOnInit() {
    this._carService.fetchData().subscribe(data => this.cars = data);
  }
}
