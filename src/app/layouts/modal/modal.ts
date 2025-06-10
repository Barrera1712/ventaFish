import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Producto } from '../../interfaces/producto';

@Component({
  selector: 'app-modal',
  imports: [],
  templateUrl: './modal.html',
  styleUrl: './modal.css'
})
export class Modal {
  @Input() showmodal:boolean = false;
  @Output() closeModal= new EventEmitter<void>();

  @Input() data:Producto | undefined;

  onClose():void{
    this.closeModal.emit();
  }
}
