import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core'; /* set up to receive product data */
import { Output, EventEmitter } from '@angular/core'; /* makes the child component be able to notify and pass data to the parent component */

@Component({ /* this decorator indicates that the followinmg class (Prod) is a component. Also provides metadata about the component, including its selector, templates and styles. Also exports the class ProductAlertsComponents which handles
functionality for the component */

  selector: 'app-product-alerts', /* identifies the component */
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {

/* the @Input decorator indicates that the property value passes in from the component's parent (ProductListComponent) */
  @Input() product;
  @Output() notify = new EventEmitter(); /* The @Output decorator allows the ProductAlertsComponent to emit an event when the value of the
  notify property changes */

  constructor() { } /* For this example, neither the constructor, the ngOnInit or the OnInit on the class declaration are being used */
  ngOnInit() {
  }

}