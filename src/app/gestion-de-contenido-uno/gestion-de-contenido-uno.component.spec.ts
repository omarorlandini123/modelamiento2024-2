import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDeContenidoUnoComponent } from './gestion-de-contenido-uno.component';

describe('GestionDeContenidoUnoComponent', () => {
  let component: GestionDeContenidoUnoComponent;
  let fixture: ComponentFixture<GestionDeContenidoUnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionDeContenidoUnoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GestionDeContenidoUnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
