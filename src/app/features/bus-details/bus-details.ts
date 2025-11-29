// src/app/features/bus-details/bus-details.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../../core/services/search.service';

@Component({
  selector: 'app-bus-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bus-details.html',
  styleUrls: ['./bus-details.scss']
})
export class BusDetailsComponent implements OnInit {
  bus: any = null;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private searchService: SearchService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.searchService.getBusById(id).subscribe(bus => {
      this.bus = bus;
      this.loading = false;
    });
  }
}
