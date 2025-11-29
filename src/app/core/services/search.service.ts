// src/app/core/services/search.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SearchService {
  private base = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  searchBuses(query: any): Observable<any> {
    let params = new HttpParams();
    Object.keys(query || {}).forEach(k => {
      const v = query[k];
      if (v !== null && v !== undefined && String(v) !== '') {
        params = params.set(k, String(v));
      }
    });
    return this.http.get(`${this.base}/buses`, { params });
  }

  getBusById(id: number) {
    return this.http.get(`${this.base}/buses/${id}`);
  }
}
