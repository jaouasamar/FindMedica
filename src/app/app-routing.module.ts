import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MedicamentComponent } from './pages/medicament/medicament/medicament.component';
import { DetailMedComponent } from './components/detail-med/detail-med.component';
import { NouveauMedicaComponent } from './pages/medicament/nouveau-medica/nouveau-medica.component';
import { PageDashbordComponent } from './pages/page-dashbord/page-dashbord.component';
import { PageInscriptionComponent } from './pages/page-inscription/page-inscription.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageStatistiquesComponent } from './pages/page-statistiques/page-statistiques.component';
import { PageMvtstkComponent } from './pages/mvtstk/page-mvtstk/page-mvtstk.component';
import { PageClientComponent } from './pages/client/page-client/page-client.component';
import { PageFournisseurComponent } from './pages/fournisseurs/page-fournisseur/page-fournisseur.component';
import { NouveauCltFrsComponent } from './components/nouveau-clt-frs/nouveau-clt-frs.component';
import { DetailCmdCltFrsComponent } from './components/detail-cmd-clt-frs/detail-cmd-clt-frs.component';
import { PageCmdCltFrsComponent } from './pages/page-cmd-clt-frs/page-cmd-clt-frs.component';
import { NouvelleCmdCltFrsComponent } from './components/nouvelle-cmd-clt-frs/nouvelle-cmd-clt-frs.component';
import { PageProfilComponent } from './pages/profil/page-profil/page-profil.component';
import { ChangerMPComponent } from './pages/profil/changer-mp/changer-mp.component';
import { PagePharmacieComponent } from './pages/pharmacie/page-pharmacie/page-pharmacie.component';
import { NouvellepharmaComponent } from './components/nouvellepharma/nouvellepharma.component';
import { MedPatientComponent } from './pages/medicament/medicament/med-patient/med-patient.component';
import { ListeMedUserComponent } from './pages/UserPages/liste-med-user/liste-med-user.component';
import { ListePharmaUserComponent } from './pages/UserPages/liste-pharma-user/liste-pharma-user.component';
import { CmdUserComponent } from './pages/UserPages/cmd-user/cmd-user.component';


const routes: Routes = [

  {path:"login",component:PageLoginComponent},
  {path:"inscrire",component:PageInscriptionComponent},
  {path:"",component:PageDashbordComponent,
  children:[
   {
    path:"statistiques",
    component:PageStatistiquesComponent,
    },
    {
    path:"medicament",
    component: MedicamentComponent
    },
    {
      path:"medicament",
      component: MedPatientComponent ,
      data:{
        origin:"patient"
      }
    },
    {path:"nouveauMedicament",
     component:NouveauMedicaComponent
    },
    {path:"nouveauMedicament/:idMed",
    component:NouveauMedicaComponent
   },
    {path:"detail Medicament",
    component:DetailMedComponent
     },
     {path:"mvtstk",
    component:PageMvtstkComponent
     },
     {path:"clients",
    component:PageClientComponent
     },
     {path:"nouveauClient",
    component:NouveauCltFrsComponent,
    data:{
      origin:"utilisateur"
    }
     },
     {path:"cmdClt",
     component:PageCmdCltFrsComponent,
     data:{
      origin:"utilisateur"
    }
      },

     {path:"fournisseurs",
    component:PageFournisseurComponent
     },
     {path:"nouveauFournisseur",
    component:NouveauCltFrsComponent,
    data:{
      origin:"fournisseur"
    }
     },
     {
      path:"cmdFrs",
      component:PageCmdCltFrsComponent,
      data:{
       origin:"fournisseur"
      }
      },
      {path:"detail-cmd",
     component:DetailCmdCltFrsComponent
      },
      {path:"nouvelleCmdClt",
     component:NouvelleCmdCltFrsComponent,
     data:{
      origin:"utilisateur"
     }
      },
      {path:"nouvelleCmdFrs",
      component:NouvelleCmdCltFrsComponent,
      data:{
        origin:"fournisseur"
       }
       },
       {path:"profil",
       component:PageProfilComponent
        },
      {path:"changerMP",
      component:ChangerMPComponent
      },
      {path:"pharmacie",
      component:PagePharmacieComponent
      },
      {path:"nouvellePharma",
      component:NouvellepharmaComponent
      },
      {path:"nouvellePharma",
      component:NouvellepharmaComponent
      },
      {
        path:"MedUser",
      component:ListeMedUserComponent
      },
      {
      path:'PharUser',
      component:ListePharmaUserComponent
      },
      {
        path:'CmdUser',
        component:CmdUserComponent
      },









  ]
},






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
