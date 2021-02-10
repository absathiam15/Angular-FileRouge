import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfilsService } from 'src/app/profils.service';
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
  profils: Profils;
  fileToUpload: any;

  public returnUrl:any; 

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private profilService: ProfilsService
  ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      nom: ['', Validators.required ],
      prenom: ['', Validators.required ],
      email: ['', Validators.required ],
      profil: ['', Validators.required ],
      adresse: ['', Validators.required ],
      genre: ['', Validators.required ],
      telephone: ['', Validators.required ],
      avatar: ['', Validators.required]
    });
    this.returnUrl=this.route.snapshot.queryParams['returnUrl'] || '/';  
  
    this.getProfils();
  }
 
  get f() { 
    return this.registerForm.controls; 
  }

  handleFileInput(e:any) {
    this.fileToUpload = e.files.item(0);
    console.log(this.fileToUpload);
  }

  addUser(nom: string, prenom: string, email: string, profil: string, username: string, genre: string, adresse: string, telephone: number, avatar: string) {

    const newUser: User = ({
      
      id: null,
      username: username,
      nom: nom,
      prenom: prenom,
      email: email,
      profil: profil,
      adresse: adresse,
      genre: genre,
      telephone: telephone,
      avatar: avatar
    });
    this.userService.addUser(newUser);
    console.log(newUser);
  }

  onAdd() {
    console.log(this.registerForm.value);
    const user = new FormData();
    user.append('username', this.registerForm.value.username);
    user.append('nom', this.registerForm.value.nom);
    user.append('prenom', this.registerForm.value.prenom);
    user.append('adresse', this.registerForm.value.adresse);
    user.append('profil', this.registerForm.value.profil);
    user.append('genre', this.registerForm.value.genre);
    user.append('email', this.registerForm.value.email);
    user.append('telephone', this.registerForm.value.telephone);
    user.append('avatar', this.fileToUpload);

    console.log(user);
    this.userService.addUser(user).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error); 
      }
    );

  }

  getProfils() {
    this.profilService.listerProfils().subscribe(
      response => {
        this.profils = response;
        console.log(response);
      },
      error => {
        console.log(error);
      }
    );
  }
  
}

