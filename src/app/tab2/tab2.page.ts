import { Component, OnInit} from '@angular/core';
import { ProductService } from '../services/ProductService';
import { Product } from '../models/productos';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
  products: Product[] = [];

  constructor(private productService: ProductService) 
  {
  this.products = this.productService.getProducts();
  console.log(this.products);
  }

  ngOnInit() {
    
  }
  

  ionViewDidEnter() {
    this.products = this.productService.getProducts();
    console.log(this.products);
  }  

  deleteProduct(product: Product) {
    const result = confirm(`¿Está seguro de que desea eliminar el producto ${product.name}?`);
    if (result) {
      this.productService.deleteProduct(product);
    }
  }  
}
