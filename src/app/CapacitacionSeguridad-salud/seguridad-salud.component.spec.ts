import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguridadSaludComponent } from './seguridad-salud.component';

describe('SeguridadSaludComponent', () => {
  let component: SeguridadSaludComponent;
  let fixture: ComponentFixture<SeguridadSaludComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeguridadSaludComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SeguridadSaludComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
