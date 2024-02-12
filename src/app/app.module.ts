import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashbord/dashbord.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UpdateProfilComponent } from './update-profil/update-profil.component';
import { AddPresenceComponent } from './add-presence/add-presence.component';
import { CongeEmployeComponent } from './conge-employe/conge-employe.component';
import { DemandeCongeComponent } from './demande-conge/demande-conge.component';
import { DemandeDocComponent } from './demande-doc/demande-doc.component';
import { InfoEmployeComponent } from './employe-components/info-employe/info-employe.component';
import { NotesInternesEmployeComponent } from './employe-components/notes-internes-employe/notes-internes-employe.component';
import { PresenceCalendarComponent } from './employe-components/presence-calendar/presence-calendar.component';
import { TimetrackingComponent } from './employe-components/timetracking/timetracking.component';
import { UpdateInfoEmployeComponent } from './employe-components/update-info-employe/update-info-employe.component';
import { InfoCandidateComponentComponent } from './candidate-components/info-candidate/info-candidate.component/info-candidate.component.component';
import { ResponseComponent } from './candidate-components/response/response/response.component';
import { AddEmployeComponent } from './admin-components/add-employe/add-employe.component';
import { ArchivedEmployesComponent } from './admin-components/archived-employes/archived-employes.component';
import { CaisseComponent } from './admin-components/caisse/caisse.component';
import { CongesComponent } from './admin-components/conges/conges.component';
import { DialogsComponent } from './admin-components/dialogs/dialogs.component';
import { HolidayCalendarComponent } from './admin-components/holiday-calendar/holiday-calendar.component';
import { ListEmployesComponent } from './admin-components/list-employes/list-employes.component';
import { MeetingsComponent } from './admin-components/meetings/meetings.component';
import { NotesComponent } from './admin-components/notes/notes.component';
import { PresenceComponent } from './admin-components/presence/presence.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  DashboardComponent,
  LoginComponent,
  RegisterComponent,
  SidebarComponent,
  UpdateProfilComponent,
  AddPresenceComponent,
  CongeEmployeComponent,
  DemandeCongeComponent,
  DemandeDocComponent,
  InfoEmployeComponent,
  NotesInternesEmployeComponent,
  PresenceCalendarComponent,
  TimetrackingComponent,
  UpdateInfoEmployeComponent,
  InfoCandidateComponentComponent,
  ResponseComponent,
  AddEmployeComponent,
  ArchivedEmployesComponent,
  CaisseComponent,
  CongesComponent,
  DialogsComponent,
  HolidayCalendarComponent,
  ListEmployesComponent,
  MeetingsComponent,
  NotesComponent,
  PresenceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
