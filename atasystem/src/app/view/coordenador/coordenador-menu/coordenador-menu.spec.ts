import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordenadorMenu } from './coordenador-menu';

describe('CoordenadorMenu', () => {
  let component: CoordenadorMenu;
  let fixture: ComponentFixture<CoordenadorMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoordenadorMenu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoordenadorMenu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
