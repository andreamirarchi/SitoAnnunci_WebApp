import {Component} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FilterService} from '../../services/filter.service';


@Component({
  selector: 'app-search-bar',
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {

  filtroTitolo: string = '';
  filtroTipologia: string = '';
  filtroCitta: string = '';

  constructor(private filtersService: FilterService) {}

  aggiornaFiltri() {
    this.filtersService.aggiornaFiltriCerca(this.filtroTitolo, this.filtroTipologia, this.filtroCitta);
  }
}
