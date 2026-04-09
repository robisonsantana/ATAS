import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MontarBancaComponent } from './montar-banca';

describe('MontarBanca', () => {
  let component: MontarBancaComponent;
  let fixture: ComponentFixture<MontarBancaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MontarBancaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MontarBancaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
