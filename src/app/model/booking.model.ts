export class Booking {
  bookingId: number;
  customerName: string;
  mobileNumber: number;
  carId: number;
  carName: string;
  bookigDate: Date;
  rentType: string;
  rentDuration: number;
  noOfCars: number;
  constructor() {
    this.bookingId = 0;
    this.customerName = '';
    this.mobileNumber = 0;
    this.carId = 0;
    this.carName = '';
    this.bookigDate = new Date();
    this.rentType = '';
    this.rentDuration = 0;
    this.noOfCars = 0;
  }
}
