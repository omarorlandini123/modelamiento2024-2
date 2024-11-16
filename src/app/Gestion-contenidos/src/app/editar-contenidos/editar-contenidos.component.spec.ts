import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarContenidosComponent } from './editar-contenidos.component';

describe('EditarContenidosComponent', () => {
  let component: EditarContenidosComponent;
  let fixture: ComponentFixture<EditarContenidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarContenidosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarContenidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
