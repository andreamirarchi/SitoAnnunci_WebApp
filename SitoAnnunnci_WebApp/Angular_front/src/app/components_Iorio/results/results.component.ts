import { Component, OnInit } from '@angular/core';
import { FilterService } from '../../../../../Web_conato/SitoAnnunci_WebApp/SitoAnnunnci_WebApp/src/app/services/filter.service';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  imports: [
    NgIf,
    NgForOf
  ],
  styleUrl: './results.component.css'
})
export class ResultsComponent implements OnInit {
  allResults = [
    { id: 1, title: 'Appartamento in centro', typeAd:'vendita', citta: 'Cosenza', price: 5000, tipologia: 'Appartamento',superficie: 5000 },
    { id: 2, title: 'Villa con giardino', typeAd:'vendita', citta: 'Cosenza', price: 15000, tipologia: 'Villa',superficie: 1900 },
    { id: 3, title: 'Attico panoramico', typeAd:'vendita', citta: 'Cosenza', price: 12000, tipologia: 'Attico',superficie: 600 },
    { id: 4, title: 'Box Auto', typeAd:'vendita', citta: 'Cosenza', price: 15_000, tipologia: 'Box Auto e Garage',superficie: 100 },
    { id: 5, title: 'Appartamento 350mt dal mare', typeAd:'cercasi', citta: 'Cosenza', price: 60_500, tipologia: 'Appartamento',superficie: 3000 },
    { id: 6, title: 'Terreno Agricolo', typeAd:'cercasi', citta: 'Cosenza', price: 130_000, tipologia: 'Terreno', superficie: 150000 }
  ];

  results: any[] = [];
  searchFilters: any = {};
  advancedFilters: any = {};

  constructor(private filterService: FilterService) {}

  ngOnInit() {
    // Sottoscriviti agli observables dei filtri
    this.filterService.searchFilters$.subscribe(searchFilters => {
      this.searchFilters = searchFilters;
      this.applyFilters(); // Applica i filtri ogni volta che vengono aggiornati
    });

    this.filterService.advancedFilters$.subscribe(advancedFilters => {
      this.advancedFilters = advancedFilters;
      this.applyFilters();
    });
  }

  applyFilters() {
    this.results = this.allResults.filter(result => {
      let match = true;

      console.log(result);

      // Filtri della barra di ricerca
      if (this.searchFilters.titolo && !result.title.includes(this.searchFilters.titolo)) match = false;
      if (this.searchFilters.tipologia && result.tipologia !== this.searchFilters.tipologia) match = false;
      if (this.searchFilters.citta && result.citta !== this.searchFilters.citta) match = false;

      // Filtri laterali
      if (this.advancedFilters.typeAd && result.typeAd !== this.advancedFilters.typeAd) match = false;
      if (this.advancedFilters.prezzoDa && result.price < this.advancedFilters.prezzoDa) match = false;
      if (this.advancedFilters.prezzoA && result.price > this.advancedFilters.prezzoA) match = false;
      if (this.advancedFilters.superficieDa && result.superficie < this.advancedFilters.superficieDa) match = false;
      if (this.advancedFilters.superficieA && result.superficie > this.advancedFilters.superficieA) match = false;

      return match;
    });
  }

  ordinaPer(campo: 'price' | 'superficie', ordine: 'asc' | 'desc') {
    this.results.sort((a, b) => {
      if (ordine === 'asc') {
        return a[campo] - b[campo];
      } else {
        return b[campo] - a[campo];
      }
    });
  }
}
