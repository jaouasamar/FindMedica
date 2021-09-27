import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SerachComponent } from './components/serach/serach.component';
import { DetailPharmacieComponent } from './components/detail-pharmacie/detail-pharmacie.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { NouveauMedicaComponent } from './pages/medicament/nouveau-medica/nouveau-medica.component';

import { DetailMedComponent } from './components/detail-med/detail-med.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageInscriptionComponent } from './pages/page-inscription/page-inscription.component';
import { PageDashbordComponent } from './pages/page-dashbord/page-dashbord.component';
import { PageStatistiquesComponent } from './pages/page-statistiques/page-statistiques.component';
import { MenuComponent } from './components/menu/menu.component';
import { HeaderComponent } from './components/header/header.component';
import { MedicamentComponent } from './pages/medicament/medicament/medicament.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { BoutonsActionsComponent } from './components/boutons-actions/boutons-actions.component';
import { PageMvtstkComponent } from './pages/mvtstk/page-mvtstk/page-mvtstk.component';
import { DetailMvtstkMedComponent } from './components/detail-mvtstk-med/detail-mvtstk-med.component';
import { DetailMvtStkComponent } from './detail-mvt-stk/detail-mvt-stk.component';
import { DetalisClsFrsComponent } from './components/detalis-cls-frs/detalis-cls-frs.component';
import { PageClientComponent } from './pages/client/page-client/page-client.component';
import { PageFournisseurComponent } from './pages/fournisseurs/page-fournisseur/page-fournisseur.component';
import { NouveauCltFrsComponent } from './components/nouveau-clt-frs/nouveau-clt-frs.component';
import { DetailCmdCltFrsComponent } from './components/detail-cmd-clt-frs/detail-cmd-clt-frs.component';
import { DetailCmdComponent } from './components/detail-cmd/detail-cmd.component';
import { PageCmdCltFrsComponent } from './pages/page-cmd-clt-frs/page-cmd-clt-frs.component';
import { NouvelleCmdCltFrsComponent } from './components/nouvelle-cmd-clt-frs/nouvelle-cmd-clt-frs.component';
import { ChangerMPComponent } from './pages/profil/changer-mp/changer-mp.component';
import { PageProfilComponent } from './pages/profil/page-profil/page-profil.component';
import { PagePharmacieComponent } from './pages/pharmacie/page-pharmacie/page-pharmacie.component';
import { NouvellepharmaComponent } from './components/nouvellepharma/nouvellepharma.component';
import { MedPatientComponent } from './pages/medicament/medicament/med-patient/med-patient.component';
import { ListeMedUserComponent } from './pages/UserPages/liste-med-user/liste-med-user.component';
import { ListePharmaUserComponent } from './pages/UserPages/liste-pharma-user/liste-pharma-user.component';

import { CmdUserComponent } from './pages/UserPages/cmd-user/cmd-user.component';
import { DetailMedPharmUserComponent } from './components/detail-med-pharm-user/detail-med-pharm-user.component';


@NgModule({
  declarations: [
    AppComponent,
    SerachComponent,

    NavbarComponent,
    NouveauMedicaComponent,

    DetailMedComponent,
    PageLoginComponent,
    PageInscriptionComponent,
    PageDashbordComponent,
    PageStatistiquesComponent,
    MenuComponent,
    HeaderComponent,

    MedicamentComponent,
    PaginationComponent,
    BoutonsActionsComponent,
    PageMvtstkComponent,
    DetailMvtstkMedComponent,
    DetailMvtStkComponent,
    DetalisClsFrsComponent,
    PageClientComponent,
    PageFournisseurComponent,
    NouveauCltFrsComponent,
    DetailCmdCltFrsComponent,
    DetailCmdComponent,
    PageCmdCltFrsComponent,
    NouvelleCmdCltFrsComponent,
    ChangerMPComponent,
    PageProfilComponent,
    PagePharmacieComponent,
    DetailPharmacieComponent,
    NouvellepharmaComponent,
    MedPatientComponent,
    ListeMedUserComponent,
    ListePharmaUserComponent,
    CmdUserComponent,
    DetailMedPharmUserComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
