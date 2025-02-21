import { Component } from '@angular/core';
import { AnnuncioService } from 'src/app/core/services/annuncio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-annuncio-form',
  templateUrl: './annuncio-form.component.html',
  styleUrls: ['./annuncio-form.component.scss']
})
export class AnnuncioFormComponent {
  titolo = '';
  descrizione = '';
  prezzo = 0;

  constructor(private annuncioService: AnnuncioService, private router: Router) {}

  onSubmit() {
    const nuovoAnnuncio = {
      titolo: this.titolo,
      descrizione: this.descrizione,
      prezzo: this.prezzo,
      ribassato: false
    };

    this.annuncioService.createAnnuncio(nuovoAnnuncio).subscribe(() => {
      this.router.navigate(['/home']);
    });
  }
}
