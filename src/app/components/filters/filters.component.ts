import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FilterService } from '../../services/filter.service';

@Component({
  selector: 'app-filters',
  imports: [
    FormsModule
  ],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css'
})
export class FiltersComponent {
  filtroVendita: string = '';  // Dichiara la variabile filtroVendita
  filtroTipologia: string = '';
  prezzoDa: number | null = null;
  prezzoA: number | null = null;
  superficieDa: number | null = null; // Dichiara la variabile superficieDa
  superficieA: number | null = null; // Dichiara la variabile superficieA

  constructor(private filterService: FilterService) {}

  applyFilters() {
    this.filterService.aggiornaFiltroVendita(this.filtroVendita);
    this.filterService.aggiornaFiltroPrezzoDa(this.prezzoDa);
    this.filterService.aggiornaFiltroPrezzoA(this.prezzoA);
    this.filterService.aggiornaFiltroSuperficieDa(this.superficieDa);
    this.filterService.aggiornaFiltroSuperficieA(this.superficieA);
  }

  // Resetta i filtri e aggiorna il servizio
  resetFilters() {
    this.filtroTipologia = '';
    this.filtroVendita = '';
    this.prezzoDa = null;
    this.prezzoA = null;
    this.superficieDa = null;
    this.superficieA = null;

    this.filterService.resetAdvancedFilters();
  }
}
