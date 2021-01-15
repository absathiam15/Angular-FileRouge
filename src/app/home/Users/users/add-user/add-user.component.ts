import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  
  registerForm!: FormGroup;
  submitted = false;
  loading = false;
  data:any;

  public returnUrl:any; 

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      nom: ['', Validators.required ],
      prenom: ['', Validators.required ],
      email: ['', Validators.required ],
      profil: ['', Validators.required ]
    });
    this.returnUrl=this.route.snapshot.queryParams['returnUrl'] || '/';
  }
 
  get f() { 
    return this.registerForm.controls; 
  }

  addUser(nom: string, prenom: string, email: string, profil: string) {

    const newUser: User = ({
      
      id: null,
      nom: nom,
      prenom: prenom,
      email: email,
      profil: profil
    });
    this.userService.addUser(newUser);
    console.log(newUser);
  }

  onAdd(value:any) {
    console.log(this.registerForm.value);
    this.submitted = true;
       if(this.registerForm.invalid) {
         return;
       }
    this.loading = true;
    this.userService.addUser(this.registerForm.value)
        .pipe()
        .subscribe(
            (data:any) => {
                this.userService.success('Registration successful', true);
                this.router.navigate(['/login']);
                console.log(data);
            },
            (error:any) => {
                this.userService.error(error);
                this.loading = false;
            });

  }
}

