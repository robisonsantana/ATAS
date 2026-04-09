import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditalMenu } from './edital-menu';

describe('EditalMenu', () => {
  let component: EditalMenu;
  let fixture: ComponentFixture<EditalMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditalMenu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditalMenu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
