import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmarEnvioComponent } from './confirmar-envio.component';

describe('ConfirmarEnvioComponent', () => {
  let component: ConfirmarEnvioComponent;
  let fixture: ComponentFixture<ConfirmarEnvioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmarEnvioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmarEnvioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
