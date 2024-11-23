import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionContenidoPComponent } from './gestion-contenido-p.component';

describe('GestionContenidoPComponent', () => {
  let component: GestionContenidoPComponent;
  let fixture: ComponentFixture<GestionContenidoPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionContenidoPComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GestionContenidoPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
