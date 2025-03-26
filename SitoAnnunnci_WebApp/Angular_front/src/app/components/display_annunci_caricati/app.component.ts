import {Component, OnInit, ViewEncapsulation} from '@angular/core'; // il viewencapsulation l'ho dovuto mettere perché tyscript incapsula gli stili e non li rende visibili per gli elementi creati dinamicamente
import { HttpClient } from '@angular/common/http';

export class Annuncio {
  private _id: number;
  private _nome: string;
  private _descrizione: string;
  private _foto: string;
  private _prezzoVecchio: number;
  private _prezzoNuovo: number;
  private _m2: number;
  private _placeId: string;
  private _changed: boolean;
  private _owner: string;

  constructor(data: any) {
    this._id = data.id;
    this._nome = data.nome;
    this._descrizione = data.descrizione;
    this._foto = data.foto;
    this._prezzoVecchio = data.prezzoVecchio;
    this._prezzoNuovo = data.prezzoNuovo;
    this._m2 = data.m2;
    this._placeId = data.placeId;
    this._changed = data.changed;
    this._owner = data.owner;
  }

  // Getter e Setter per id
  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  // Getter e Setter per nome
  get nome(): string {
    return this._nome;
  }

  set nome(value: string) {
    this._nome = value;
  }

  // Getter e Setter per descrizione
  get descrizione(): string {
    return this._descrizione;
  }

  set descrizione(value: string) {
    this._descrizione = value;
  }

  // Getter e Setter per foto
  get foto(): string {
    return this._foto;
  }

  set foto(value: string) {
    this._foto = value;
  }

  // Getter e Setter per prezzoVecchio
  get prezzoVecchio(): number {
    return this._prezzoVecchio;
  }

  set prezzoVecchio(value: number) {
    this._prezzoVecchio = value;
  }

  // Getter e Setter per prezzoNuovo
  get prezzoNuovo(): number {
    return this._prezzoNuovo;
  }

  set prezzoNuovo(value: number) {
    this._prezzoNuovo = value;
  }

  // Getter e Setter per m2
  get m2(): number {
    return this._m2;
  }

  set m2(value: number) {
    this._m2 = value;
  }

  // Getter e Setter per placeId
  get placeId(): string {
    return this._placeId;
  }

  set placeId(value: string) {
    this._placeId = value;
  }

  // Getter e Setter per changed
  get changed(): boolean {
    return this._changed;
  }

  set changed(value: boolean) {
    this._changed = value;
  }

  // Getter e Setter per owner
  get owner(): string {
    return this._owner;
  }

  set owner(value: string) {
    this._owner = value;
  }

  // Metodo statico per creare un'istanza dalla risposta JSON
  static fromJSON(data: any): Annuncio {
    return new Annuncio(data);
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title = 'La mia app Angular!';
  annunci: Annuncio[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchAnnunci();
  }

  showAlert() {
    alert('Hai cliccato il pulsante!');
  }

  fetchAnnunci(): void {
    const apiUrl = 'http://localhost:8081/api/data';

    this.http.get<any[]>(apiUrl).subscribe({
      next: (response) => {
        // Carica gli annunci con il lazy loading (ogni annuncio è un'istanza della classe Annuncio)
        this.annunci = response.map(data => Annuncio.fromJSON(data)); // Usa il metodo di fabbrica statico
        this.createAnnunci(); // Costruisci la UI con i dati ricevuti
      },
      error: (error) => {
        console.error('Errore nel caricamento degli annunci', error);
      },
      complete: () => {
        console.log('Richiesta completata');
      }
    });
  }

  createAnnunci(): void {
    const container = document.getElementById('annunci-container');
    if (container) {
      container.innerHTML = ''; // Pulisce il container prima di riempirlo

      this.annunci.forEach(annuncio => {
        console.log(annuncio.owner);
        if (annuncio.owner === 'an') {
          const div = document.createElement('div');
          div.classList.add('annuncio');

          const edit = document.createElement('button');
          edit.name = `${annuncio.id}`;
          edit.textContent = 'Modifica';
          div.appendChild(edit);

          const title = document.createElement('h2');
          title.textContent = annuncio.nome;
          div.appendChild(title);

          const description = document.createElement('p');
          description.textContent = annuncio.descrizione;
          div.appendChild(description);

          const price = document.createElement('p');
          price.innerHTML = `<strong>Prezzo: €${annuncio.prezzoNuovo}</strong>`;
          div.appendChild(price);

          if (annuncio.foto) {
            const img = document.createElement('img');
            img.src = `data:image/jpeg;base64,${annuncio.foto}`;
            img.alt = 'Foto annuncio';
            img.classList.add('annuncio-img'); // Usa una classe CSS
            div.appendChild(img);
          }

          const shareButton = document.createElement('p');
          shareButton.style.textAlign = "left";
          shareButton.innerHTML = `<img src="https://play-lh.googleusercontent.com/gjX-aBU0iIAmfJqUWg8rWifLPDWNwRe0aIj46216Bq0cpKnEm6nC3pG7-3uh56wd5AE=s188-rw" style="width: 20%;"> Pubblicizza su Imgur`
          /* shareButton.onclick = function(){

          }; */
          div.appendChild(shareButton);

          container.appendChild(div);
        }
      });
    }
  }
}
