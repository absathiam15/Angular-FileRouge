import { Component, OnInit } from '@angular/core';
import { ProfilSortieService } from '../../profil-sortie.service';

@Component({
  selector: 'app-list-profil-sortie',
  templateUrl: './list-profil-sortie.component.html',
  styleUrls: ['./list-profil-sortie.component.css']
})
export class ListProfilSortieComponent implements OnInit {

  pSorties:any;

  constructor(
    private profilSortieService: ProfilSortieService
  ) { }

  ngOnInit(): void {
    return this.getAllProfilSorties();
  }

  getAllProfilSorties() {
    this.profilSortieService.listProfilSorties().subscribe(
      (data:any) => {
        this.pSorties = data;
        console.log(this.pSorties);
      },
      (error: any) => console.log(error.console.error.message)
      )
    }

    // this.profilsService.listerProfils().subscribe(
    //   (data:any) => {
    //     this.data = data;
    //     //this.dataSource = data
    //     console.log(this.data);  
    //   },
    //   (error: any) => console.log(error.console.error.message)
    // )
  
}
