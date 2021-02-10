import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AddProfilComponent } from './home/Profils/Add/add-profil/add-profil.component';
import { ListerProfilComponent } from './home/Profils/Lister/lister-profil/lister-profil.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { AddUserComponent } from './home/Users/users/add-user/add-user.component';
import { ListerUserComponent } from './home/Users/users/List/lister-user/lister-user.component';
import { EditUserComponent } from './home/Users/users/Edit/edit-user/edit-user.component';
import { ListPromoComponent } from './Parametres/Promos/List/list-promo/list-promo.component';
import { AddPromoComponent } from './Parametres/Promos/Add/add-promo/add-promo.component';
import { AddCompetencesComponent } from './Parametres/Competences/Add/add-competences/add-competences.component';
import { ListCompetencesComponent } from './Parametres/Competences/List/list-competences/list-competences.component';
import { AddGrpeCompetencesComponent } from './Parametres/GrpeCompetences/Add/add-grpe-competences/add-grpe-competences.component';
import { ListGrpeCompetencesComponent } from './Parametres/GrpeCompetences/List/list-grpe-competences/list-grpe-competences.component';
import { AddGrpeTagComponent } from './Parametres/GrpeTags/Add/add-grpe-tag/add-grpe-tag.component';
import { ListGrpeTagComponent } from './Parametres/GrpeTags/List/list-grpe-tag/list-grpe-tag.component';
import { AddProfilSortieComponent } from './Parametres/ProfilSortie/Add/add-profil-sortie/add-profil-sortie.component';
import { ListProfilSortieComponent } from './Parametres/ProfilSortie/List/list-profil-sortie/list-profil-sortie.component';
import { AddReferentielComponent } from './Parametres/Referentiels/Add/add-referentiel/add-referentiel.component';
import { ListReferentielComponent } from './Parametres/Referentiels/List/list-referentiel/list-referentiel.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ParametreComponent } from './Parametres/parametre.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './Login/login/login.component';
import { ApprenantComponent } from './home/Apprenant/apprenant/apprenant.component';
import { CmComponent } from './home/CM/cm/cm.component';
import { AdminComponent } from './home/Admin/admin/admin.component';
import { FormateurComponent } from './home/Formateur/formateur/formateur.component';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserService } from './home/Users/users/user.service';
import { TokenInterceptor } from './Login/token.interceptor';
import { ProfilsService } from './profils.service';
import { UserComponent } from './home/Users/user.component';
import { CompetencesService } from './Parametres/Competences/competences.service';
import { GrpCompetencesService } from './Parametres/GrpeCompetences/grp-competences.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    AddUserComponent,
    ListerUserComponent,
    EditUserComponent,
    AddProfilComponent,
    ListPromoComponent,
    AddPromoComponent,
    ListerProfilComponent,
    JumbotronComponent,
    AddCompetencesComponent,
    ListCompetencesComponent,
    AddGrpeCompetencesComponent,
    ListGrpeCompetencesComponent,
    AddGrpeTagComponent,
    ListGrpeTagComponent,
    AddProfilSortieComponent,
    ListProfilSortieComponent,
    AddReferentielComponent,
    ListReferentielComponent,
    PageNotFoundComponent,
    ParametreComponent,
    AdminComponent,
    FormateurComponent,
    ApprenantComponent,
    CmComponent,
    UserComponent,
    
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    UserService,
    ProfilsService,
    CompetencesService,
    GrpCompetencesService,
    { 
      provide: HTTP_INTERCEPTORS, 
      useClass: TokenInterceptor, 
      multi: true 
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
