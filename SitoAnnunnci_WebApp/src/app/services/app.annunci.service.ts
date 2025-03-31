import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnnunciService {
  private jsonUrl = './assets/annunci.json'; // Percorso del file JSON

  constructor(private http: HttpClient) {}

  getAnnunci(): Observable<any[]> {
    return this.http.get<any[]>(this.jsonUrl);
  }
}
