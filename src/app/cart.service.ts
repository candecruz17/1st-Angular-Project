import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'; // injecting the httpClient service into my service so that my application can fetch data and interact with external APIs and resources

@Injectable({
  providedIn: 'root' //what does this do?
})
export class CartService {

  items = []; //defines an item property to store the array of the current products in the CartService

  addToCart(product) { //appends a product to an array of items
    this.items.push(product);
  }

  getItems() { // collects the items users add to the cart and returns each item with its associated quantity
    return this.items;
  }

  clearCart() { // returns an empty array of items (emptying the cart)
    this.items = [];
    return this.items;
  }

  getShippingPrices() { //method to get shipping data from the shipping.json file
    return this.http.get('/assets/shipping.json');
  }

  constructor(
    private http: HttpClient // injecting HttpClient into the CartService constructor
  ) { }

}