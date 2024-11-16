import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionContenidosComponent } from './gestion-contenidos.component';

describe('GestionContenidosComponent', () => {
  let component: GestionContenidosComponent;
  let fixture: ComponentFixture<GestionContenidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionContenidosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionContenidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
