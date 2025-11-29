// src/app/app.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

// ensure paths match exact file locations
import { HeaderComponent } from './shared/header/header';
import { StickySearchComponent } from './shared/sticky-search/sticky-search';
import { ScrollProgressComponent } from './shared/scroll-progress/scroll-progress';
import { BackToTopComponent } from './shared/back-to-top/back-to-top';
import { FooterComponent } from './shared/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HttpClientModule,
    HeaderComponent,
    StickySearchComponent,
    ScrollProgressComponent,
    BackToTopComponent,
    FooterComponent
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class AppComponent {
  title = 'RedBus Clone';
}
