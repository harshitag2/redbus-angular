// src/app/shared/back-to-top/back-to-top.ts
import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-back-to-top',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button class="b2t" *ngIf="visible" (click)="scrollTop()" aria-label="Back to top">↑</button>
  `,
  styles: [`
    .b2t {
      position: fixed;
      right: 18px;
      bottom: 18px;
      z-index: 1400;
      width: 44px;
      height: 44px;
      border-radius: 10px;
      background: #e53935;
      color: #fff;
      border: none;
      box-shadow: 0 8px 18px rgba(10,10,10,0.12);
      cursor: pointer;
      font-size: 20px;
    }
  `]
})
export class BackToTopComponent {
  visible = false;

  @HostListener('window:scroll', [])
  onScroll() {
    const y = window.scrollY || document.documentElement.scrollTop;
    this.visible = y > 300;
  }

  scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
