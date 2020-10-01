import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BisiComponent } from './bisi.component';

describe('BisiComponent', () => {
  let component: BisiComponent;
  let fixture: ComponentFixture<BisiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BisiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BisiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
