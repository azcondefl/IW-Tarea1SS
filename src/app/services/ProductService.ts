import { Injectable } from '@angular/core';
import { Product } from '../models/productos';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [];

  constructor() {}

  addProduct(newProduct: Product) {
    this.products.push(newProduct);
  }
  
  updateProduct(product: Product) {
    const index = this.products.findIndex(p => p.name === product.name);
    if (index !== -1) {
      this.products[index] = product;
    }
  }

  deleteProduct(product: Product) {
    const index = this.products.indexOf(product);
    if (index !== -1) {
      this.products.splice(index, 1);
    }
  }

  getProducts(): Product[] {
    return this.products;
  }
}


