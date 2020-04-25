import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfilComponent } from './profil/profil.component';
import { SemestreComponent } from './semestre/semestre.component';
import { ModuleComponent } from './module/module.component';
import { GroupeComponent } from './groupe/groupe.component';
import { AbsenceComponent } from './absence/absence.component';
import { JustificationComponent } from './justification/justification.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { EnseignantComponent } from './enseignant/enseignant.component';
import { FiliereComponent } from './filiere/filiere.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfilComponent,
    SemestreComponent,
    ModuleComponent,
    GroupeComponent,
    AbsenceComponent,
    JustificationComponent,
    EtudiantComponent,
    EnseignantComponent,
    FiliereComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
