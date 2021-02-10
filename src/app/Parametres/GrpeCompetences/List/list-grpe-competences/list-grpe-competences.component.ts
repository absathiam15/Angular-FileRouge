import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GrpCompetencesService } from '../../grp-competences.service';

@Component({
  selector: 'app-list-grpe-competences',
  templateUrl: './list-grpe-competences.component.html',
  styleUrls: ['./list-grpe-competences.component.css']
})
export class ListGrpeCompetencesComponent implements OnInit {

  dataGrpComp:any;

  constructor(
    private http: HttpClient,
    private grpCompetencesService: GrpCompetencesService
  ) { }

  ngOnInit(): void {
    this.listerGrpComp();
  }

  listerGrpComp() {
    this.grpCompetencesService.listerGrpComp().subscribe(
      (data:any) => {
        this.dataGrpComp = data;
        console.log(this.dataGrpComp);  
      },
      (error: any) => console.log(error.console.error.message)
    )
  }
}
