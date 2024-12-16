import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Car } from '../../model/car.model';
import { Booking } from '../../model/booking.model';
@Component({
  selector: 'app-bookings',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './bookings.component.html',
  styleUrl: './bookings.component.css',
})
export class BookingsComponent implements OnInit {
  localKeyName: string = 'rentalCar';
  sidePanelVisible: boolean = true;
  carList: Car[] = [];
  bookingObj: Booking = new Booking();
  bookingList: Booking[] = [];
  ngOnInit(): void {
    const localData = localStorage.getItem(this.localKeyName);
    if (localData != null) {
      this.carList = JSON.parse(localData);
    }
    const localBookingData = localStorage.getItem('rentalBooking');
    if (localBookingData != null) {
      this.bookingList = JSON.parse(localBookingData);
    }
  }
  onBooking() {
    if (this.bookingObj.bookingId == 0) {
      const carData = this.carList.find(
        (m) => m.carId == this.bookingObj.carId
      );
      if (carData != undefined) this.bookingObj.carName = carData?.carName;
      this.bookingList.unshift(this.bookingObj);
      localStorage.setItem('rentalBooking', JSON.stringify(this.bookingList));
    }
    this.onReset();
  }
  onReset() {
    this.bookingObj = new Booking();
  }
}
