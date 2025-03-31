import { Component } from '@angular/core';
import {MasterComponent} from './components/master/master.component';

@Component({
  selector: 'app-root',
  imports: [MasterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'WebApp';
}
