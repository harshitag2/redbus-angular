// src/app/app.routes.ts
import type { Routes } from '@angular/router';
import { provideRouter, RouterModule } from '@angular/router';

import { HomeComponent } from './features/home/home';
import { ResultsComponent } from './features/results/results';
import { BusDetailsComponent } from './features/bus-details/bus-details';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'results', component: ResultsComponent },
  { path: 'results/:id', component: BusDetailsComponent },
  { path: '**', redirectTo: '' }
];

// Provide router in main (main.ts) or in AppComponent bootstrap.
export const appRoutingProviders = [provideRouter(routes)];
