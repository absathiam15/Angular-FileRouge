import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GrpCompetencesService {

  apiUrl='http://127.0.0.1:8000/api';

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  listerGrpComp() {
    return this.http.get(this.apiUrl + '/admin/grpecompetences');
  }
}
