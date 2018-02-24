import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectDetailComponent } from './collector-detail.component';

describe('CollectDetailComponent', () => {
  let component: CollectDetailComponent;
  let fixture: ComponentFixture<CollectDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
