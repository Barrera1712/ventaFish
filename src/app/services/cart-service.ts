import { computed, Injectable, signal } from '@angular/core';
import { Producto } from '../interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
  private _items = signal<Producto[]>([]);

  readonly items = this._items.asReadonly();

  readonly total = computed(() =>
    this._items().reduce((sum, p) => sum + p.precio, 0)
  );

  add(product: Producto) {
    this._items.update(items => [...items, product]);
  }

  remove(index: number) {
    this._items.update(items => items.filter((_, i) => i !== index));
  }

  clear() {
    this._items.set([]);
  }
}
