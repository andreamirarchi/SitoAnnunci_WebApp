import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Annuncio } from './Annuncio';
import { imgur } from './Images'

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [RouterLink, CommonModule], // Importa RouterOutlet per il routing
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  annunci: Annuncio[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchAnnunci();
  }

  fetchAnnunci(): void {
    const apiUrl = 'http://localhost:8081/api/data';

    this.http.get<any[]>(apiUrl).subscribe({
      next: (response: any[]) => {
        this.annunci = response.map(data => Annuncio.fromJSON(data)); // Mappa la risposta JSON agli oggetti Annuncio
      },
      error: (error: any) => {
        console.error('Errore nel caricamento degli annunci', error);
      },
      complete: () => {
        console.log('Richiesta completata');
      }
    });
  }

  updateAnnuncio(id: number, aggiornamenti: Partial<Annuncio>) {
    const apiUrl = `http://localhost:8081/api/data/${id}`;
    return this.http.patch(apiUrl, aggiornamenti).subscribe({
      next: () => console.log('Annuncio aggiornato con successo!'),
      error: (error) => console.error('Errore durante l\'aggiornamento', error)
    });
  }

  protected readonly imgur = imgur;
}
