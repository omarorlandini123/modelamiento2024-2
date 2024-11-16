import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerarInformeContableShowComponent } from './generar-informe-contable-show.component';

describe('GenerarInformeContableShowComponent', () => {
  let component: GenerarInformeContableShowComponent;
  let fixture: ComponentFixture<GenerarInformeContableShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenerarInformeContableShowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GenerarInformeContableShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
