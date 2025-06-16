import { Component, computed, OnInit, signal, Signal } from '@angular/core';
import { CartService } from '../../services/cart-service';
import { Producto } from '../../interfaces/producto';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart implements OnInit {

  items = signal<Producto[]>([]);
  total: Signal<number>;

  constructor(private cart: CartService) {
    this.total = computed(() => 
      this.items().reduce((acc, item) => acc + (item.precio ?? 0), 0)
    );
  }

  ngOnInit() {
    this.items.set(this.cart.items());
  }

  remove(i: number) {
    this.cart.remove(i);
    this.items.set(this.cart.items());
  }

  clear() {
    this.cart.clear();
    this.items.set([]);
  }
}
