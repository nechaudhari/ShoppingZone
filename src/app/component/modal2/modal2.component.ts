import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-modal2',
  templateUrl: './modal2.component.html',
  styleUrls: ['./modal2.component.css']
})
export class Modal2Component {
  mobileNumber: string = ''; 
  name: string = '';
  email: string = '';
  password: string = '';

  constructor(private location: Location) {}

  closeModal() {}

  cancel() {}

  editMobileNumber() {}

  sendOTP(){}

  goBack() {
    this.location.back();
  }

}
