import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/components/display_annunci_caricati/app.component';
import { provideHttpClient } from '@angular/common/http'; // Importa provideHttpClient

bootstrapApplication(AppComponent, {
  providers: [provideHttpClient()] // Aggiungi il provider di HttpClient
}).catch(err => console.error(err));
