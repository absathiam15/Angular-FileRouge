import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfilSortieService {

  apiUrl='http://127.0.0.1:8000/api';

  constructor(
    private http: HttpClient
  ) { }

  listProfilSorties() {
    return this.http.get(this.apiUrl + '/admin/profilsorties');
  }
}
 