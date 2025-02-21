import { Component, OnInit } from '@angular/core';
import { AnnuncioService } from 'src/app/core/services/annuncio.service';

@Component({
  selector: 'app-annunci-venditore',
  templateUrl: './annunci-venditore.component.html',
  styleUrls: ['./annunci-venditore.component.scss']
})
export class AnnunciVenditoreComponent implements OnInit {
  annunci: any[] = [];

  constructor(private annuncioService: AnnuncioService) {}

  ngOnInit() {
    this.getAnnunciVenditore();
  }

  getAnnunciVenditore() {
    const venditoreId = 1;  // Simulazione di ID venditore
    this.annuncioService.getAnnunciVenditore(venditoreId).subscribe((annunci) => {
      this.annunci = annunci;
    });
  }
}
