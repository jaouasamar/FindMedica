import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Medicament } from 'src/app/models/medicament.model';
import { Pharmacie } from 'src/app/models/pharmacie.model';
import { MedicamentServiceService } from 'src/app/services/medicament-service.service';

@Component({
  selector: 'app-detail-med',
  templateUrl: './detail-med.component.html',
  styleUrls: ['./detail-med.component.css']
})
export class DetailMedComponent implements OnInit {

  @Input()
  med:Medicament= new Medicament();


  constructor(private route:Router){}

  ngOnInit():void{


  }

  modifierMed():void
  {

    this.route.navigate(['nouveauMedicament',this.med.id]);
  }


 /*listMed: Medicament[]=[];
 listPhar:Pharmacie[]=[];
  constructor(private medS: MedicamentServiceService)
  {}

  ngOnInit(): void {
    this.medS.getAll().subscribe(data=>{console.log(data);
    this.listMed=data},
    error=>{console.log(error)});
  }*/
}
