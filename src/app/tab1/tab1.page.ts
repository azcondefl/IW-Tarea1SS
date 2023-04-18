import { Component } from '@angular/core';
import { ProductService } from '../services/ProductService';
import { Product } from '../models/productos';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  newProduct: Product = {
    name: '',
    price: 0,
    description: '',
    category: '',
    photo: '',
    rating: 0,
    opinions: []
  };
  stars = ['star-outline', 'star-outline', 'star-outline', 'star-outline', 'star-outline'];
  product: Product = {
    name: '',
    price: 0,
    description: '',
    category: '',
    photo: '',
    rating: 0,
    opinions: []
  };

  constructor(private productService: ProductService) {}

  onFileSelected(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.newProduct.photo = reader.result as string;
    };
  }

  rateProduct(index: number) {
    this.stars = this.stars.map((icon, i) => {
      if (i <= index) {
        return 'star';
      } else {
        return 'star-outline';
      }
    });
  
    this.newProduct.rating = index + 1;
  }

  saveProduct() {
    this.productService.addProduct(this.newProduct);
    this.product = {
      name: '',
      price: 0,
      description: '',
      category: '',
      photo: '',
      rating: 0,
      opinions: []
    };
  }

  clearForm() {
    this.newProduct = {
      name: '',
      price: 0,
      description: '',
      category: '',
      photo: '',
      rating: 0,
      opinions: []
    };
  }  

  onSubmit() {
    this.productService.addProduct(this.product);
    this.clearForm();
  }
}

