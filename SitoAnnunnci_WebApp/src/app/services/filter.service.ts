import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  private searchFiltersSubject = new BehaviorSubject<any>({
    titolo: '',
    tipologia: '',
    citta: ''
  });
  searchFilters$ = this.searchFiltersSubject.asObservable();

  private advancedFiltersSubject = new BehaviorSubject<any>({
    vendita: '', // "Vendita" o "Cercasi"
    prezzoDa: null,
    prezzoA: null,
    superficieDa: null,
    superficieA: null
  });
  advancedFilters$ = this.advancedFiltersSubject.asObservable();

  // Metodi per aggiornare solo i filtri della barra di ricerca
  aggiornaFiltroTitolo(valore: string) {
    this.updateSearchFilters({ titolo: valore });
  }

  aggiornaFiltroTipologia(valore: string) {
    this.updateSearchFilters({ tipologia: valore });
  }

  aggiornaFiltroCitta(valore: string) {
    this.updateSearchFilters({ citta: valore });
  }

  aggiornaFiltriCerca(filtroTitolo: string, filtroTipologia: string, filtroCitta: string) {
    this.searchFiltersSubject.next({
      titolo: filtroTitolo,
      tipologia: filtroTipologia,
      citta: filtroCitta
    });
  }

  private updateSearchFilters(nuoviFiltri: Partial<any>) {
    const filtriAttuali = this.searchFiltersSubject.value;
    this.searchFiltersSubject.next({ ...filtriAttuali, ...nuoviFiltri });
  }

  //Metodi per aggiornare solo i filtri del pannello laterale
  aggiornaFiltroVendita(valore: string) {
    this.updateAdvancedFilters({ vendita: valore });
  }

  aggiornaFiltroPrezzoDa(valore: number | null) {
    this.updateAdvancedFilters({ prezzoDa: valore });
  }

  aggiornaFiltroPrezzoA(valore: number | null) {
    this.updateAdvancedFilters({ prezzoA: valore });
  }

  aggiornaFiltroSuperficieDa(valore: number | null) {
    this.updateAdvancedFilters({ superficieDa: valore });
  }

  aggiornaFiltroSuperficieA(valore: number | null) {
    this.updateAdvancedFilters({ superficieA: valore });
  }

  private updateAdvancedFilters(nuoviFiltri: Partial<any>) {
    const filtriAttuali = this.advancedFiltersSubject.value;
    this.advancedFiltersSubject.next({ ...filtriAttuali, ...nuoviFiltri });
  }

  resetAdvancedFilters() {
    this.advancedFiltersSubject.next({
      vendita: '',
      prezzoDa: null,
      prezzoA: null,
      superficieDa: null,
      superficieA: null
    });
  }
}
