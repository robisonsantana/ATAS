import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarAta } from './editar-ata';

describe('EditarAta', () => {
  let component: EditarAta;
  let fixture: ComponentFixture<EditarAta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarAta]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarAta);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
