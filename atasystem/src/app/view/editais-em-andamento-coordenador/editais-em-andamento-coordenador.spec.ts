import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaisEmAndamentoCoordenador } from './editais-em-andamento-coordenador';

describe('EditaisEmAndamentoCoordenador', () => {
  let component: EditaisEmAndamentoCoordenador;
  let fixture: ComponentFixture<EditaisEmAndamentoCoordenador>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditaisEmAndamentoCoordenador]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditaisEmAndamentoCoordenador);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
