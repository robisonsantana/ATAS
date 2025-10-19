import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtaMenu } from './ata-menu';

describe('AtaMenu', () => {
  let component: AtaMenu;
  let fixture: ComponentFixture<AtaMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtaMenu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtaMenu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
