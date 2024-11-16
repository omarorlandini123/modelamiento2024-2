import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerarInformeContableComponent } from './generar-informe-contable.component';

describe('GenerarInformeContableComponent', () => {
  let component: GenerarInformeContableComponent;
  let fixture: ComponentFixture<GenerarInformeContableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenerarInformeContableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GenerarInformeContableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
