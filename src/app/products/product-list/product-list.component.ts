import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products = [
    {
      name: 'COVENANT SLEEVE TEE',
      description: '“Covenant” is track #5 of the album “Of Demons & Mortals.”',
      price: 50,
      image: 'assets/images/clothes/covenant-sleeve-tee-front.png',
    },
    {
      name: 'COVENANT COACH JACKET',
      description: '“Covenant” is track #5 of the album “Of Demons & Mortals.”',
      price: 100,
      image: 'assets/images/clothes/covenant-coach-jacket-front.png',
    },
    {
      name: 'COVENANT TEE SHIRT',
      description: '“Covenant” is track #5 of the album “Of Demons & Mortals.”',
      price: 45,
      image: 'assets/images/clothes/covenant-tee-shirt-front.png',
    },
  ];
}
