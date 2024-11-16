import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEmpleadosPagosComponent } from './lista-empleados-pagos.component';

describe('ListaEmpleadosPagosComponent', () => {
  let component: ListaEmpleadosPagosComponent;
  let fixture: ComponentFixture<ListaEmpleadosPagosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaEmpleadosPagosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaEmpleadosPagosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
