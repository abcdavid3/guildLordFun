import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LordComponent } from './lord.component';

describe('LordComponent', () => {
  let component: LordComponent;
  let fixture: ComponentFixture<LordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
