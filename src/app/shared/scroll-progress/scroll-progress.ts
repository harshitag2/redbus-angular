import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-scroll-progress',
  standalone: true,
  imports: [CommonModule],
  template: `<div class="progress-wrap"><div class="progress" [style.width.%]="pct"></div></div>`,
  styles: [`
    .progress-wrap { position: fixed; left: 0; right: 0; top: 0; height: 3px; z-index: 1500; background: transparent; pointer-events:none; }
    .progress { height: 100%; width: 0%; background: linear-gradient(90deg,#ff5252,#d500f9); transition: width 120ms linear; box-shadow: 0 2px 6px rgba(0,0,0,0.08); }
  `]
})
export class ScrollProgressComponent {
  pct = 0;
  @HostListener('window:scroll', [])
  onScroll() {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    this.pct = docHeight > 0 ? Math.round((scrollTop / docHeight) * 100) : 0;
  }
}
