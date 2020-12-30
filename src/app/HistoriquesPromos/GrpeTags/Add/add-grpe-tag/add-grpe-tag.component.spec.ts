import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGrpeTagComponent } from './add-grpe-tag.component';

describe('AddGrpeTagComponent', () => {
  let component: AddGrpeTagComponent;
  let fixture: ComponentFixture<AddGrpeTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddGrpeTagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGrpeTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
