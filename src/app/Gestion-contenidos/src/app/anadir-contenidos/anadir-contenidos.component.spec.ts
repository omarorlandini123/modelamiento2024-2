import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnadirContenidosComponent } from './anadir-contenidos.component';

describe('AnadirContenidosComponent', () => {
  let component: AnadirContenidosComponent;
  let fixture: ComponentFixture<AnadirContenidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnadirContenidosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnadirContenidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
