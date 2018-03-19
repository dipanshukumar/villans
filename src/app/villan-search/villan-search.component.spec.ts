import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VillanSearchComponent } from './villan-search.component';

describe('VillanSearchComponent', () => {
  let component: VillanSearchComponent;
  let fixture: ComponentFixture<VillanSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VillanSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VillanSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
