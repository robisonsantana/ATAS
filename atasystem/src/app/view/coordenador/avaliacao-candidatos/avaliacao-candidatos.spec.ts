import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaliacaoCandidatos } from './avaliacao-candidatos';

describe('AvaliacaoCandidatos', () => {
  let component: AvaliacaoCandidatos;
  let fixture: ComponentFixture<AvaliacaoCandidatos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvaliacaoCandidatos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvaliacaoCandidatos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
