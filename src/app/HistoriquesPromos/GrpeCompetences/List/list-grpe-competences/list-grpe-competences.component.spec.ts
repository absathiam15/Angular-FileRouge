import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGrpeCompetencesComponent } from './list-grpe-competences.component';

describe('ListGrpeCompetencesComponent', () => {
  let component: ListGrpeCompetencesComponent;
  let fixture: ComponentFixture<ListGrpeCompetencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListGrpeCompetencesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListGrpeCompetencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
