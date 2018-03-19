import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VillanDetailComponent } from './villan-detail.component';

describe('VillanDetailComponent', () => {
  let component: VillanDetailComponent;
  let fixture: ComponentFixture<VillanDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VillanDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VillanDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
