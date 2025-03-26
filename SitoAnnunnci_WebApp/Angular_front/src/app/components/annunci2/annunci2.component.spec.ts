import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Annunci2Component } from './annunci2.component';
import { AnnunciService } from '../../services/app.annunci.service';
import { of } from 'rxjs';

describe('Annunci2Component', () => {
  let component: Annunci2Component;
  let fixture: ComponentFixture<Annunci2Component>;
  let mockAnnunciService;

  beforeEach(async () => {
    mockAnnunciService = {
      getAnnunci: jasmine.createSpy('getAnnunci').and.returnValue(of([
        { id: 1, titolo: 'MacBook Pro', descrizione: 'Condition: excellent', prezzo: 1800 },
        { id: 2, titolo: 'Bicicletta', descrizione: 'Lightweight and fast', prezzo: 700 },
        { id: 3, titolo: 'PlayStation 5', descrizione: 'Brand new, sealed', prezzo: 500 }
      ]))
    };

    await TestBed.configureTestingModule({
      declarations: [Annunci2Component],
      providers: [{ provide: AnnunciService, useValue: mockAnnunciService }]
    })
      .compileComponents();

    fixture = TestBed.createComponent(Annunci2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load and display annunci', () => {
    expect(component.annunci.length).toBe(3);
    expect(component.annunci[0].titolo).toBe('MacBook Pro');
  });
});
