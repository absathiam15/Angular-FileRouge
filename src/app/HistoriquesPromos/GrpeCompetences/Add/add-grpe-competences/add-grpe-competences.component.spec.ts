import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGrpeCompetencesComponent } from './add-grpe-competences.component';

describe('AddGrpeCompetencesComponent', () => {
  let component: AddGrpeCompetencesComponent;
  let fixture: ComponentFixture<AddGrpeCompetencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddGrpeCompetencesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGrpeCompetencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
