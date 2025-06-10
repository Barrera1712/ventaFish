import { Component } from '@angular/core';
import { ProductService } from '../../services/product-service';
import { Producto } from '../../interfaces/producto';
import { Modal } from '../../layouts/modal/modal';
@Component({
  selector: 'app-products',
  imports: [Modal],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {
  showModal: boolean = false;
  modalData: Producto | undefined;

  productSelect(product: Producto): void {
    this.modalData = product;
    this.openModal();
  }

  openModal(): void {
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
  }

  constructor(private productsService: ProductService) { }

  ProductsList: Producto[] = [];
  ngOnInit() {
    this.ProductsList = this.productsService.getProducts;
  }

}
