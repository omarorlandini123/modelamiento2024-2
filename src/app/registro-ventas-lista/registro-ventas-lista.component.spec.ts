import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroVentasListaComponent } from './registro-ventas-lista.component';

describe('RegistroVentasListaComponent', () => {
  let component: RegistroVentasListaComponent;
  let fixture: ComponentFixture<RegistroVentasListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroVentasListaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistroVentasListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
