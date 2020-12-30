import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCompetencesComponent } from './HistoriquesPromos/Competences/Add/add-competences/add-competences.component';
import { ListCompetencesComponent } from './HistoriquesPromos/Competences/List/list-competences/list-competences.component';
import { AddGrpeCompetencesComponent } from './HistoriquesPromos/GrpeCompetences/Add/add-grpe-competences/add-grpe-competences.component';
import { ListGrpeCompetencesComponent } from './HistoriquesPromos/GrpeCompetences/List/list-grpe-competences/list-grpe-competences.component';
import { HistoriquesPromosComponent } from './HistoriquesPromos/historiques-promos.component';
import { AddProfilSortieComponent } from './HistoriquesPromos/ProfilSortie/Add/add-profil-sortie/add-profil-sortie.component';
import { ListProfilSortieComponent } from './HistoriquesPromos/ProfilSortie/List/list-profil-sortie/list-profil-sortie.component';
import { AddPromoComponent } from './HistoriquesPromos/Promos/Add/add-promo/add-promo.component';
import { ListPromoComponent } from './HistoriquesPromos/Promos/List/list-promo/list-promo.component';
import { HomeComponent } from './home/home.component';
import { AddProfilComponent } from './home/Profils/Add/add-profil/add-profil.component';
import { ListerProfilComponent } from './home/Profils/Lister/lister-profil/lister-profil.component';
import { AddUserComponent } from './home/Users/users/add-user/add-user.component';
import { ListerUserComponent } from './home/Users/users/List/lister-user/lister-user.component';
import { LoginComponent } from './Login/login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

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
  { path: 'login', component: LoginComponent},
  { path: 'historiques', component: HistoriquesPromosComponent},
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
  // { path: 'historique', component: ListCompetencesComponent,
  //   // children: [
  //   //   // { path: '/add', component: AddCompetencesComponent}
  //   // ]  
  // }
  // { path: 'login', component: LoginComponent},
  // { path: 'user/add', component: AddUserComponent},
  // { path: 'user/edit', component: EditUserComponent},
  // { path: 'profil/add', component: AddProfilComponent},
  // { path: 'profil/list', component: ListerProfilComponent},
  // { path: 'competences/add', component: AddCompetencesComponent},
  // { path: 'competences/list', component: ListCompetencesComponent},
  // { path: 'grpeCompetences/add', component: AddGrpeCompetencesComponent},
  // { path: 'grpeCompetences/list', component: ListGrpeCompetencesComponent},
  // { path: 'profilSortie/add', component: AddProfilSortieComponent},
  // { path: 'profilSortie/list', component: ListProfilSortieComponent},
  // { path: 'promo/add', component: AddPromoComponent},
  // { path: 'promo/list', component: ListPromoComponent},

  // { path: 'not-found', component: PageNotFoundComponent},
  // { path: '**', redirectTo: '/not-Found'},





  // { 
  //   path: 'users', 
  //   component: ListerUserComponent,
  //   children: 
  //   [
  //     { path: 'lister', component: ListerUserComponent},
  //     { path: 'add', component: AddUserComponent}

  //   ] },
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
