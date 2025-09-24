import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitarEdital } from './solicitar-edital';

describe('SolicitarEdital', () => {
  let component: SolicitarEdital;
  let fixture: ComponentFixture<SolicitarEdital>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolicitarEdital]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolicitarEdital);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
