import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarService } from '../service/car.service';
import { ICars } from '../cars';
@Component({
  selector: 'app-cars-details',
  templateUrl: './cars-details.component.html',
  styleUrls: ['./cars-details.component.css']
})
export class CarsDetailsComponent implements OnInit {

  registeredCars: ICars[];
  carDetails = ICars;

  constructor(
    private _carService: CarService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    const index = this.route.snapshot.paramMap.get('index');
    this._carService.fetchData().subscribe(data => {
      console.log('data------', this.registeredCars = data);
      this.carDetails = this.registeredCars[index];
      console.log('data-1-----', this.carDetails);
    });
  }

  goBack() {
    this.router.navigate(['cars']);
  }
}
