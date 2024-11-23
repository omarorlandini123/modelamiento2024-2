import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionContenidoAnadirComponent } from './gestion-contenido-anadir.component';

describe('GestionContenidoAnadirComponent', () => {
  let component: GestionContenidoAnadirComponent;
  let fixture: ComponentFixture<GestionContenidoAnadirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionContenidoAnadirComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GestionContenidoAnadirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
