import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCompetencesComponent } from './Parametres/Competences/Add/add-competences/add-competences.component';
import { ListCompetencesComponent } from './Parametres/Competences/List/list-competences/list-competences.component';
import { AddGrpeCompetencesComponent } from './Parametres/GrpeCompetences/Add/add-grpe-competences/add-grpe-competences.component';
import { ListGrpeCompetencesComponent } from './Parametres/GrpeCompetences/List/list-grpe-competences/list-grpe-competences.component';
import { AddProfilSortieComponent } from './Parametres/ProfilSortie/Add/add-profil-sortie/add-profil-sortie.component';
import { ListProfilSortieComponent } from './Parametres/ProfilSortie/List/list-profil-sortie/list-profil-sortie.component';
import { AddPromoComponent } from './Parametres/Promos/Add/add-promo/add-promo.component';
import { ListPromoComponent } from './Parametres/Promos/List/list-promo/list-promo.component';
import { AdminComponent } from './home/Admin/admin/admin.component';
import { ApprenantComponent } from './home/Apprenant/apprenant/apprenant.component';
import { CmComponent } from './home/CM/cm/cm.component';
import { FormateurComponent } from './home/Formateur/formateur/formateur.component';
import { HomeComponent } from './home/home.component';
import { AddProfilComponent } from './home/Profils/Add/add-profil/add-profil.component';
import { ListerProfilComponent } from './home/Profils/Lister/lister-profil/lister-profil.component';
import { AddUserComponent } from './home/Users/users/add-user/add-user.component';
import { ListerUserComponent } from './home/Users/users/List/lister-user/lister-user.component';
import { LoginComponent } from './Login/login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ParametreComponent } from './Parametres/parametre.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'users',
        component: ListerUserComponent,
        children: [
          { path: 'add', component: AddUserComponent }
        ]
      },
      { 
        path: 'profils', 
        component: ListerProfilComponent,
      children: [
        { path: 'add', component: AddProfilComponent }
      ]
    }]
  },
  { path: 'admin', component: AdminComponent},
  { path: 'formateur', component: FormateurComponent},
  { path: 'apprenant', component: ApprenantComponent},
  { path: 'cm', component: CmComponent},
  { path: 'login', component: LoginComponent},
  { path: 'parametre', component: ParametreComponent},
  { path: 'promo/list', component: ListPromoComponent},
  { path: 'promo/add', component: AddPromoComponent},
  { path: 'competences/add', component: AddCompetencesComponent},
  { path: 'competences/list', component: ListCompetencesComponent},
  { path: 'grpeCompetences/add', component: AddGrpeCompetencesComponent},
  { path: 'grpeCompetences/list', component: ListGrpeCompetencesComponent},
  { path: 'profilSortie/add', component: AddProfilSortieComponent},
  { path: 'profilSortie/list', component: ListProfilSortieComponent},

  { path: 'page-not-found', component: PageNotFoundComponent},
  { path: '**', redirectTo: 'page-not-found'},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
