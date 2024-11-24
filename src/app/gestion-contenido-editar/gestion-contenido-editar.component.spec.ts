import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionContenidoEditarComponent } from './gestion-contenido-editar.component';

describe('GestionContenidoEditarComponent', () => {
  let component: GestionContenidoEditarComponent;
  let fixture: ComponentFixture<GestionContenidoEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionContenidoEditarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GestionContenidoEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
