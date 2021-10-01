import { Component, Input, OnInit } from '@angular/core';
import { __core_private_testing_placeholder__ } from '@angular/core/testing';
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

  errorMsgs = '';
  idMedToDelete ? = -1 ;
  listMed:Array<Medicament>=[];

  constructor(private route:Router,private medserv:MedicamentServiceService){}

  ngOnInit():void{


  }
  selectMedToDelId(id ?:number):void
  {

    this.idMedToDelete=id;

  }

  findAllMed():void
  {
    this.medserv.getAll().subscribe
    (res => {
      this.listMed = res;
    },
    error => {
      this.errorMsgs = error.error.message;
    })

  }
  confirmerSupp():void
  {this.selectMedToDelId(this.med.id);
    console.log(this.idMedToDelete);
    if(this.idMedToDelete !== -1)
    {

      this.medserv.delete(this.idMedToDelete).subscribe
      (res => {
        this.findAllMed();

      },
      error => {
        this.errorMsgs = error.error.message;
      }
      );
     }
    }

  modifierMed():void
  {
    this.route.navigate(['nouveauMedicament',this.med.id]);
  }
  annulerSuppression():void
  {
    this.idMedToDelete=-1;
  }

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

