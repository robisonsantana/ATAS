import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaliacaoBanca } from './avaliacao-banca';

describe('AvaliacaoBanca', () => {
  let component: AvaliacaoBanca;
  let fixture: ComponentFixture<AvaliacaoBanca>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvaliacaoBanca]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvaliacaoBanca);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
