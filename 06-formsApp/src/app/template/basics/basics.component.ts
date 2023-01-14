import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [],
})
export class BasicsComponent {

  @ViewChild('myForm') myForm!: NgForm;

  initForm = {
    product: 'RTX 4080ti',
    price: 0,
    stock: 0
  }

  validName(): boolean {
    return (
      this.myForm?.controls['product']?.invalid &&
      this.myForm.controls['product']?.touched
    );
  }
  validPrice(): boolean {
    return (
      this.myForm?.controls['price']?.touched &&
      this.myForm.controls['price'].value < 0
    );
  }
  save() {
    console.log('Posted');

    this.myForm.resetForm({
      price: 0,
      stock: 0
    })
  }
}
