import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitacoesCoordenador } from './solicitacoes-coordenador';

describe('SolicitacoesCoordenador', () => {
  let component: SolicitacoesCoordenador;
  let fixture: ComponentFixture<SolicitacoesCoordenador>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolicitacoesCoordenador]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolicitacoesCoordenador);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
