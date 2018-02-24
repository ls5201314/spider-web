import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectListComponent } from './collector-list.component';

describe('CollectListComponent', () => {
  let component: CollectListComponent;
  let fixture: ComponentFixture<CollectListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
