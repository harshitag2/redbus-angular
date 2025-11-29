// src/app/shared/sticky-search.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sticky-search',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './sticky-search.html',
  styleUrls: ['./sticky-search.scss']
})
export class StickySearchComponent implements OnInit {
  form!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      from: [''],
      to: [''],
      date: [''],
      passengers: [1]
    });
  }

  onSearch(): void {
    if (!this.form.valid) return;
    this.router.navigate(['/results'], { queryParams: this.form.value });
  }
}
