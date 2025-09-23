import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MontarBanca } from './montar-banca';

describe('MontarBanca', () => {
  let component: MontarBanca;
  let fixture: ComponentFixture<MontarBanca>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MontarBanca]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MontarBanca);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
