import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LordDetailComponent } from './lord-detail.component';

describe('LordDetailComponent', () => {
  let component: LordDetailComponent;
  let fixture: ComponentFixture<LordDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LordDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LordDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
