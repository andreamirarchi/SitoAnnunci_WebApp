import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import {AltraComponent} from './components/altrapagina/altra.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'A/:id', component: AltraComponent },
  { path: '**', redirectTo: '' }
];
