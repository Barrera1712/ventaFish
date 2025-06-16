import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Producto } from '../../interfaces/producto';
import { CartService } from '../../services/cart-service';

@Component({
  selector: 'app-modal',
  imports: [],
  templateUrl: './modal.html',
  styleUrl: './modal.css'
})
export class Modal {
  constructor(private cart: CartService) {}
  @Input() showmodal:boolean = false;
  @Output() closeModal= new EventEmitter<void>();

  @Input() data:Producto | undefined;

  onClose():void{
    this.closeModal.emit();
  }

  add(p: Producto) {
    this.cart.add(p);
    this.onClose();
  }
}
