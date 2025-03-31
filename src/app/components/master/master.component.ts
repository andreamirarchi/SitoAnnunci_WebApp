import { Component } from '@angular/core';
import {FiltersComponent} from '../filters/filters.component';
import {SearchBarComponent} from '../search-bar/search-bar.component';
import {ResultsComponent} from '../results/results.component';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-master',
  imports: [
    FiltersComponent,
    SearchBarComponent,
    ResultsComponent,
    CommonModule
  ],
  templateUrl: './master.component.html',
  styleUrl: './master.component.css'
})
export class MasterComponent {

}
