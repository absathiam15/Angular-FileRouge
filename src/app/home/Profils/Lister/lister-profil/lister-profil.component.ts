import { Component, OnInit } from '@angular/core';
import { ProfilsService } from 'src/app/profils.service';

@Component({
  selector: 'app-lister-profil',
  templateUrl: './lister-profil.component.html',
  styleUrls: ['./lister-profil.component.css']
})
export class ListerProfilComponent implements OnInit {

  data:any;

  constructor(
    private profilsService: ProfilsService
  ) { }

  ngOnInit(): void {
    return this.getAllProfils();
  }

  getAllProfils() {
    this.profilsService.listerProfils().subscribe(
      (data:any) => {
        this.data = data;
        //this.dataSource = data
        console.log(this.data);  
      },
      (error: any) => console.log(error.console.error.message)
    )
  }
} 