import { TestBed } from '@angular/core/testing';

import { GrpCompetencesService } from './grp-competences.service';

describe('GrpCompetencesService', () => {
  let service: GrpCompetencesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrpCompetencesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
