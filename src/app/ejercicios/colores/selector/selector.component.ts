import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-selector',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css'],
})
export class SelectorComponent {
  color = '#000000';
  colors: string[] = [];
  message = '';

  constructor() {
    this.loadColors();
  }

  addColor() {
    if (!this.color) {
      this.setMessage('⚠️ Selecciona un color válido.');
      return;
    }

    if (this.colors.includes(this.color)) {
      this.setMessage('⚠️ El color ya está en la lista.');
      return;
    }

    this.colors.push(this.color);
    this.saveColors();
    this.setMessage('✅ Color agregado.');
  }

  removeColor(index: number) {
    const confirmDelete = confirm('¿Eliminar este color?');
    if (confirmDelete) {
      this.colors.splice(index, 1);
      this.saveColors();
      this.setMessage('🗑️ Color eliminado.');
    }
  }

  clearAll() {
    const confirmClear = confirm(
      '¿Estás seguro de eliminar todos los colores?'
    );
    if (confirmClear) {
      this.colors = [];
      localStorage.removeItem('colors');
      this.setMessage('🧹 Todos los colores fueron eliminados.');
    }
  }

  saveColors() {
    localStorage.setItem('colors', JSON.stringify(this.colors));
  }

  loadColors() {
    const stored = localStorage.getItem('colors');
    this.colors = stored ? JSON.parse(stored) : [];
  }

  setMessage(msg: string) {
    this.message = msg;
    setTimeout(() => (this.message = ''), 2500); // mensaje temporal
  }
}
