import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroDisciplinas } from './cadastro-disciplinas';

describe('CadastroDisciplinas', () => {
  let component: CadastroDisciplinas;
  let fixture: ComponentFixture<CadastroDisciplinas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroDisciplinas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroDisciplinas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
