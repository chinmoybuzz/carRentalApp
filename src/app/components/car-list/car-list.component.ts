import { Component, OnInit } from '@angular/core';
import { Car } from '../../model/car.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-car-list',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './car-list.component.html',
  styleUrl: './car-list.component.css',
})
export class CarListComponent implements OnInit {
  carObj: Car = new Car();
  carList: Car[] = [];
  localKeyName: string = 'rentalCar';
  sidePanelVisible: boolean = false;
  constructor() {}
  ngOnInit() {
    const locatData = localStorage.getItem(this.localKeyName);
    if (locatData != null) {
      this.carList = JSON.parse(locatData);
    }
  }

  onSaveCar() {
    if (this.carObj.carId == 0) {
      this.carList.unshift(this.carObj);
      localStorage.setItem(this.localKeyName, JSON.stringify(this.carList));
    }
    this.onReset();
  }

  onReset() {
    this.carObj = new Car();
  }
}
