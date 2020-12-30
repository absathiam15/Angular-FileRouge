import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/user';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};
  // public loginForm: FormGroup;
  loading = false;
  submitted = false;
  error ='';
  loginForm!: FormGroup;
  
  public returnUrl:any
  constructor(
    private formBuilder: FormBuilder,
    private route:ActivatedRoute,
    private router: Router,
    private authService: AuthService) {}

    ngOnInit(): void {
      this.loginForm=this.formBuilder.group({
        username:['', Validators.required],
        password:['',Validators.required]
    });
    this.returnUrl=this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  
  get f() { 
    return this.loginForm.controls;
  }
  
    onSubmit(){
      this.submitted=true;
   
      if(this.loginForm.invalid){
      
        return;
      }
    
      this.loading=true;
      console.log(this.loginForm.value);
      this.authService.login(this.loginForm.value)
          .pipe()
          .subscribe(
            (data: any) => {
              console.log(data);
              if(data==="ROLE_ADMIN")
              {
                console.log("role admin"+this.returnUrl);
               this.returnUrl='/admin';
              }
              else if(data==="ROLE_FORMATEUR")
              {
                this.returnUrl='/formateur';
              }
              else if(data==="ROLE_APPRENANT")
              {
                this.returnUrl='/apprenant';
              }
              else if(data==="ROLE_CM")
              {
                this.returnUrl='/cm';
              }
              this.router.navigate([this.returnUrl]);
           },
            (error: any) => {
              this.error = error;
              this.loading = false;
            }
          ); 
    };
  
    login() {
          // On récupère l'url de redirection
          const redirectUrl = this.route.snapshot.queryParams['redirectUrl'] || '/home';
           
          // On accède à la page souhaitée
          this.router.navigate([redirectUrl]);
          //this.authentificationService.login(this.model);
          this.authService.login(this.model);
  
          // console.log(this.authenticationService.getToken());
  
        }
   
        

}
