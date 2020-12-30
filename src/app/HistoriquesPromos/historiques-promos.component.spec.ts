import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriquesPromosComponent } from './historiques-promos.component';

describe('HistoriquesPromosComponent', () => {
  let component: HistoriquesPromosComponent;
  let fixture: ComponentFixture<HistoriquesPromosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoriquesPromosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriquesPromosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
