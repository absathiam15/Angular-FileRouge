import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-lister-user',
  templateUrl: './lister-user.component.html',
  styleUrls: ['./lister-user.component.css']
})
export class ListerUserComponent implements OnInit {

   dataSource:any;

  constructor(
    private http: HttpClient,
    public userService: UserService
  ) { }

  ngOnInit() {
    this.getAllUsers();
  }
  
  getAllUsers() {
    this.userService.lister().subscribe(
      (data:any) => {
        this.dataSource = data;
        console.log(this.dataSource);  
      },
      (error: any) => console.log(error.console.error.message)
    )
  }

}
