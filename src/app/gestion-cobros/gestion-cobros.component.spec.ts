// gestion-cobros.component.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { GestionCobrosComponent } from './gestion-cobros.component';

describe('GestionCobrosComponent', () => {
  let component: GestionCobrosComponent;
  let fixture: ComponentFixture<GestionCobrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionCobrosComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionCobrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with empty filters', () => {
    expect(component.filtros.nombre).toBe('');
    expect(component.filtros.id).toBe('');
    expect(component.filtros.fecha).toBe('');
    expect(component.filtros.pedido).toBe('');
    expect(component.filtros.cantidad).toBe('');
  });

  it('should have initial cobros data', () => {
    expect(component.cobros.length).toBeGreaterThan(0);
  });

  it('should call buscar method', () => {
    spyOn(console, 'log');
    component.buscar();
    expect(console.log).toHaveBeenCalledWith('Buscando con filtros:', component.filtros);
  });

  it('should call exportarPDF method', () => {
    spyOn(console, 'log');
    component.exportarPDF();
    expect(console.log).toHaveBeenCalledWith('Exportando a PDF...');
  });

  it('should call cobrar method', () => {
    spyOn(console, 'log');
    const cobroMock = component.cobros[0];
    component.cobrar(cobroMock);
    expect(console.log).toHaveBeenCalledWith('Procesando cobro:', cobroMock);
  });
  it('should update filtros when ngModel changes', () => {
    const inputElement = fixture.nativeElement.querySelector('#nombre'); // Selecciona el campo por su id
    inputElement.value = 'Nuevo Nombre'; // Asigna un valor al input
    inputElement.dispatchEvent(new Event('input')); // Dispara el evento de entrada
  
    fixture.detectChanges(); // Detecta cambios en el DOM
  
    // Verifica que el valor del filtro se haya actualizado correctamente
    expect(component.filtros.nombre).toBe('Nuevo Nombre');
  });
  
});