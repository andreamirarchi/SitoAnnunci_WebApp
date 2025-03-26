import { Component, OnInit } from '@angular/core';
import { AnnunciService } from '../../services/app.annunci.service';

@Component({
  selector: 'app-annunci2',
  templateUrl: './annunci2.component.html',
  styleUrl: './annunci2.component.css'
})
export class Annunci2Component implements OnInit {
  annunci: any[] = [];

  constructor(private annunciService: AnnunciService) {
  }

  ngOnInit() {
    this.annunciService.getAnnunci().subscribe((data: any[]) => {
      this.annunci = data;
    });
  }
}

