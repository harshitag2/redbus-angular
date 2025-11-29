// src/app/features/home/home.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class HomeComponent implements OnInit {
  // demo data to make the page long and scrollable
  promoCards: Array<{ id: number; title: string; subtitle: string }> = [];
  popularRoutes: Array<{ from: string; to: string }> = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    // create 60 promo cards so the page is long
    this.promoCards = Array.from({ length: 60 }, (_, i) => ({
      id: i + 1,
      title: `Save up to ${10 + (i % 30)}% on Route ${i + 1}`,
      subtitle: `Limited-time offer for seats on popular routes — promo #${i + 1}`
    }));

    this.popularRoutes = [
      { from: 'Delhi', to: 'Jaipur' },
      { from: 'Mumbai', to: 'Pune' },
      { from: 'Bengaluru', to: 'Hyderabad' },
      { from: 'Chennai', to: 'Coimbatore' },
      { from: 'Kolkata', to: 'Siliguri' },
      { from: 'Lucknow', to: 'Kanpur' }
    ];
  }

  goToResults(route?: { from: string; to: string }) {
    // navigate to /results with example query params
    const q: any = route ? { from: route.from, to: route.to } : { from: 'Delhi', to: 'Jaipur' };
    this.router.navigate(['/results'], { queryParams: q });
  }
}
