import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  private products:Producto[] = [
    {
      id: 1,
      nombre: 'Producto 1',
      precio: 100,
      descripcion: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imagen: 'https://www.gob.mx/cms/uploads/article/main_image/40224/cangrejoazul.jpg'
    },
    {
      id: 2,
      nombre: 'Producto 2',
      precio: 200,
      descripcion: 'Descripción del producto 2',
      imagen: 'https://imagenagropecuaria.com/wp-content/uploads/2020/04/jaiba.jpg'
    },
    {
      id: 3,
      nombre: 'Producto 3',
      precio: 300,
      descripcion: 'Descripción del producto 3',
      imagen: 'https://h.hannainst.com.mx/wp-content/uploads/Bol_acuicultura2-300x219-2.jpg'
    },
    {
      id: 4,
      nombre: 'Producto 4',
      precio: 400,
      descripcion: 'Descripción del producto 4',
      imagen: 'https://www.gob.mx/cms/uploads/article/main_image/106780/TILAPIA_001.jpg'
    },
    {
      id: 5,
      nombre: 'Producto 5',
      precio: 500,
      descripcion: 'Descripción del producto 5',
      imagen: 'https://www.gob.mx/cms/uploads/article/main_image/40224/cangrejoazul.jpg'
    },
    {
      id: 6,
      nombre: 'Producto 6',
      precio: 600,
      descripcion: 'Descripción del producto 6',
      imagen: 'https://imagenagropecuaria.com/wp-content/uploads/2020/04/jaiba.jpg'
    },
    {
      id: 7,
      nombre: 'Producto 7',
      precio: 700,
      descripcion: 'Descripción del producto 7',
      imagen: 'https://www.gob.mx/cms/uploads/article/main_image/106780/TILAPIA_001.jpg'
    },
    {
      id: 8,
      nombre: 'Producto 8',
      precio: 800,
      descripcion: 'Descripción del producto 8',
      imagen: 'https://imagenagropecuaria.com/wp-content/uploads/2020/04/jaiba.jpg'
    },
    {
      id: 9,
      nombre: 'Producto 9',
      precio: 900,
      descripcion: 'Descripción del producto 9',
      imagen: 'https://www.gob.mx/cms/uploads/article/main_image/40224/cangrejoazul.jpg'
    },
    {
      id: 10,
      nombre: 'Producto 10',
      precio: 1000,
      descripcion: 'Descripción del producto 10',
      imagen: 'https://h.hannainst.com.mx/wp-content/uploads/Bol_acuicultura2-300x219-2.jpg'
    }
  ]

  get getProducts(): Producto[] {
    return this.products;
  }
}
