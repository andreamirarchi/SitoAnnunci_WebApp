import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  imports: [
    FormsModule,
    NgForOf,
    NgIf
  ],
  styleUrls: ['./review-form.component.css']
})
export class ReviewFormComponent {
  nome: string = '';
  voto: number | null = null;
  commento: string = '';
  recensioneInviata: boolean = false;

  inviaRecensione() {
    console.log('Recensione inviata:', {
      nome: this.nome,
      voto: this.voto,
      commento: this.commento
    });

    // Simula l'invio della recensione e mostra conferma
    this.recensioneInviata = true;

    // Reset form dopo 3 secondi
    setTimeout(() => {
      this.recensioneInviata = false;
      this.nome = '';
      this.voto = null;
      this.commento = '';
    }, 3000);
  }
}
