import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControldeCalidadComponent } from './controlde-calidad.component';

describe('ControldeCalidadComponent', () => {
  let component: ControldeCalidadComponent;
  let fixture: ComponentFixture<ControldeCalidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControldeCalidadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ControldeCalidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
