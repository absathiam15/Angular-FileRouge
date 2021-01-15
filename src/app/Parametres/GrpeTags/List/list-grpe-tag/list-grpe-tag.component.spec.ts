import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGrpeTagComponent } from './list-grpe-tag.component';

describe('ListGrpeTagComponent', () => {
  let component: ListGrpeTagComponent;
  let fixture: ComponentFixture<ListGrpeTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListGrpeTagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListGrpeTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
