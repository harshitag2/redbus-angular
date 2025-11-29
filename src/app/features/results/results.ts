// src/app/features/results/results.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchService } from '../../core/services/search.service';
import { BusCardComponent } from '../../shared/bus-card/bus-card';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [CommonModule, BusCardComponent],
  templateUrl: './results.html',
  styleUrls: ['./results.scss']
})
export class ResultsComponent implements OnInit {
  buses: any[] = [];
  loading = true;
  error: string | null = null;
  lastQuery: any = {};

  constructor(
    private route: ActivatedRoute,
    private searchService: SearchService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.lastQuery = params;
      this.fetch(params);
    });
  }

  fetch(params: any) {
    this.loading = true;
    this.error = null;
    this.searchService.searchBuses(params).subscribe({
      next: (data: any) => {
        this.buses = Array.isArray(data) ? data : [data];
        this.loading = false;
      },
      error: (err: any) => {
        console.error('Search error', err);
        this.error = 'Failed to load buses.';
        this.loading = false;
      }
    });
  }

  viewBus(bus: any) {
    this.router.navigate(['/bus', bus.id]);
  }
}
