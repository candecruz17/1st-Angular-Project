import { Component, OnInit } from '@angular/core'; /* This component handles the display of each product. The Angular Router displays components based on the browser's URL and my defined routes */

import { ActivatedRoute } from '@angular/router';

import { products } from '../products'; /* Need to import the router and the products arrray in otder to combine the products data and route information to display the specific details for each product */ 

import { CartService } from '../cart.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product; /* defining the product property */

  constructor( /* Injecting the ActivatedRoute into the constructor by adding a private route */
    private route: ActivatedRoute, /* ActivatedRoute is specific to each component that the Angular Router loads. It contains information about the route and the route's parameters. By injecting the ActivatedRoute I'm configuring the component to use a service */

    private cartService: CartService // injecting the cart service by adding it in the constructor
  ) { }

  /* Takes the current product as an argument, uses the CartService addToCart() method to add the product to the cart and displays a message that lets you know that you've added a product to the cart */
  addToCart(product) {
    this.cartService.addToCart(product);
    window.alert('Your proudct has been added to the cart!');
  }


  ngOnInit() { // here we're extracting the productId form the route parameters and find the corresponding product in the products array
    // First get the product id from the current route

    /* The route parameters correspond to the path variables that I define in the route. To access the route parameters, we use route.snapshot, which is the ActivatedRouteSnapshot that contains information about the active route at that particular moment in time. The URL that matches the route provides the productId. Angular then uses the productId to display details for each unique product */
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    // Find the product that correspond with the id provided in route
    this.product = products.find(product => product.id === productIdFromRoute);
  }

}