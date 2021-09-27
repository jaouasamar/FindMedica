import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { Menu } from './menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  UserRole:String | undefined;

  public menuProperties:Array<Menu> =[{
    id:'1',
    titre:'Tableau de bord',
    icon:'"bi bi-bar-chart-line',
    url:'',
    sousMenu:[
      {
        id:'11',
        titre:'Vue d\'ensemble',
        icon:'bi bi-pie-chart',
        url:''
      },
      {
        id:'12',
        titre:'Statistiques',
        icon:'bi bi-bar-chart',
        url:'statistiques'
      }
    ]
  },
  {
    id:'2',
    titre:'Medicaments',
    icon:'bi bi-file-medical',
    url:'',
    sousMenu:[
      {
        id:'21',
        titre:'Liste des medicaments',
        icon:'bi bi-thermometer',
        url:'medicament'
      },
      {
        id:'22',
        titre:'Mouvement du stock',
        icon:'bi bi-stack',
        url:'mvtstk'
      },

    ]
  },
  {
    id:'3',
    titre:'Pharmacies',
    icon:'bi bi-file-earmark-medical',
    url:'',
    sousMenu:[
      {
        id:'31',
        titre:'Liste des pharmacies',
        icon:'bi bi-card-list',
        url:'pharmacie'
      },
      {
        id:'31',
        titre:'Commandes pharmacies',
        icon:'bi bi-card-list',
        url:'cmdPharma'
      }

    ]
  },
  {
    id:'4',
    titre:'Utilisateurs',
    icon:'bi bi-person',
    url:'',
    sousMenu:[
      {
        id:'41',
        titre:'Liste des utilisateurs',
        icon:'bi bi-person-lines-fill',
        url:'clients'
      },
      {
        id:'42',
        titre:'Commandes des utilisateurs',
        icon:'bi bi-basket3',
        url:'cmdClt'
      }
    ]
  },
  {
    id:'5',
    titre:'Fournisseurs',
    icon:'bi bi-person',
    url:'',
    sousMenu:[
      {
        id:'51',
        titre:'Liste des Fournisseurs',
        icon:'bi bi-person-lines-fill',
        url:'fournisseurs'
      },
      {
        id:'52',
        titre:'Commandes Fournisseurs',
        icon:'bi bi-basket3',
        url:'cmdFrs'
      }
    ]
  },
  {
    id:'6',
    titre:'Utilisateur',
    icon:'bi bi-person',
    url:'',
    sousMenu:[
      {
        id:'61',
        titre:'Liste des Medicaments',
        icon:'bi bi-thermometer',
        url:'MedUser'
      },
      {
        id:'62',
        titre:'Liste des pharmacies',
        icon:'bi bi-card-list',
        url:'PharUser'
      }
    ]
  }

];

private lastSelectedMenu:Menu | undefined;

constructor(
  private router: Router
) { }

ngOnInit(): void {

}

navigate(menu:Menu): void {
  if(this.lastSelectedMenu)
  this.lastSelectedMenu.active=false;
  menu.active=true;
  this.lastSelectedMenu=menu;
  this.router.navigate([menu.url]);
}
}
