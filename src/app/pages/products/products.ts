import { Component } from '@angular/core';
import { ProductService } from '../../services/product-service';
import { Producto } from '../../interfaces/producto';
@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {

  constructor(private productsService:ProductService) {}

  ProductsList:Producto[] = [];
  ngOnInit() {
    this.ProductsList = this.productsService.getProducts;
  }

}
