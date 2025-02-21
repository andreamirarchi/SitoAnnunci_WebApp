import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AnnuncioService {
  private apiUrl = `${environment.apiUrl}/annunci`;

  constructor(private http: HttpClient) {}

  createAnnuncio(annuncio: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/create`, annuncio);
  }

  updatePrezzo(id: number, nuovoPrezzo: number): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}/prezzo`, { nuovoPrezzo, ribassato: true });
  }

  getAnnunciVenditore(venditoreId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/venditore/${venditoreId}`);
  }
}
