import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitarEditalComponent } from './solicitar-edital';

describe('SolicitarEdital', () => {
  let component: SolicitarEditalComponent;
  let fixture: ComponentFixture<SolicitarEditalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolicitarEditalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolicitarEditalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
