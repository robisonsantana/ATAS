import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbrirEdital } from './abrir-edital';

describe('AbrirEdital', () => {
  let component: AbrirEdital;
  let fixture: ComponentFixture<AbrirEdital>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbrirEdital]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbrirEdital);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
