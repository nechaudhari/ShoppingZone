import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  showModal = true; // Set to true to automatically open the modal
  mobileNumber: string = '';

  ngOnInit() {
    // Code to run when the component is initialized
    // Open the modal automatically here
  }

  closeModal() {
    this.showModal = false;
  }

  

  constructor(private router: Router) {}

  continueToSecondModal() {
    // Navigate to the second modal component and pass the mobileNumber
    this.router.navigate(['/modal2'], { state: { mobileNumber: this.mobileNumber } });
  }

  cancel() {
    // Handle cancel action here
    this.closeModal();
  }
 
}


