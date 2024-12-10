import { Component } from '@angular/core';

@Component({
  selector: 'app-shoes',
  imports: [],
  templateUrl: './shoes.component.html',
  styleUrl: './shoes.component.scss'
})
export class ShoesComponent {
  shoes = [
    { name: 'Nike', price: 120, size: 42 },
    { name: 'Adidas', price: 12, size: 50 },
    { name: 'Puma', price: 10, size: 56 },

  ]

}
