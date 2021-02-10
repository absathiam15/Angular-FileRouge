import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CompetencesService } from '../../competences.service';

@Component({
  selector: 'app-list-competences',
  templateUrl: './list-competences.component.html',
  styleUrls: ['./list-competences.component.css']
})
export class ListCompetencesComponent implements OnInit {

  dataComp: any;
  
  constructor(
    private http: HttpClient,
    private competencesService: CompetencesService
  ) { }

  ngOnInit(): void {
    this.listerComp();
  }

  listerComp() {
    this.competencesService.listerComp().subscribe(
      (data:any) => {
        this.dataComp = data;
        console.log(this.dataComp);  
      },
      (error: any) => console.log(error.console.error.message)
    )
  }
  }

