import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contador',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css'],
})
export class ContadorComponent {
  count = 0;

  constructor() {
    this.loadCount();
  }

  incrementar() {
    this.count++;
    this.saveCount();
  }

  resetear() {
    this.count = 0;
    this.saveCount();
  }

  private saveCount() {
    localStorage.setItem('contador', this.count.toString());
  }

  private loadCount() {
    const stored = localStorage.getItem('contador');
    this.count = stored ? parseInt(stored, 10) : 0;
  }
}
