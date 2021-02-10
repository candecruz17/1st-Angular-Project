import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service'; // importing the CartService from the cart.service.ts file

import { FormBuilder } from '@angular/forms'; // this service provides convenient methods for generating controls

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items = this.cartService.getItems(); // defining the items property to store the products in the cart

  checkoutForm = this.formBuilder.group({ //the group() method is used to set the checkoutForm property to a form model containing name and address fields
    name: '',
    address: ''
  })


  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder, // this service is part of the ReactiveFormsModule module
  ) { }

  onSubmit(): void {
    // Process checkout data here
    this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset(); // resets the form again
  }

  ngOnInit() {
  }

}