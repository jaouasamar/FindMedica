import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Action } from 'rxjs/internal/scheduler/Action';
import { Medicament } from 'src/app/models/medicament.model';
import { Pharmacie } from 'src/app/models/pharmacie.model';
import { MedicamentServiceService } from 'src/app/services/medicament-service.service';
import { PharmacieServiceService } from 'src/app/services/pharmacie-service.service';


@Component({
  selector: 'app-nouveau-medica',
  templateUrl: './nouveau-medica.component.html',
  styleUrls: ['./nouveau-medica.component.css']
})
export class NouveauMedicaComponent implements OnInit {

  constructor(
    private pharmaServ :PharmacieServiceService,
    private medServ: MedicamentServiceService,
    private router:Router,
    private activateRouter:ActivatedRoute)
     { }
  listPharma:Array<Pharmacie>=[];
  med:Medicament=new Medicament();
  pharma:Pharmacie=new Pharmacie();
   idMed=this.activateRouter.snapshot.params.idMed;


  ngOnInit(): void {

   this.pharmaServ.getAll().subscribe(response=>{console.log(response);
    this.listPharma=response;
  },
  (error:HttpErrorResponse)=>{
   alert(error.message);
  });


  if(this.idMed)
  {
    this.medServ.getById(this.idMed)
    .subscribe(data=>{
      this.med=data;
      this.pharma=this.med.pharmacie;
    });
  }
}


  goToMedList(){
    this.router.navigate(['/detailMed']);
  }

  cancelClick():void{
    this.router.navigate(['medicament']);
  }
  save():void{
    if(this.idMed)
    {this.medServ.update(this.med).subscribe(
      data=>{console.log(data);
        this.router.navigate(['medicament'])},
      error=>console.log(error));
    }
    else
    {
      this.medServ.post(this.med).subscribe(
        data=>{console.log(data);
          this.router.navigate(['medicament'])},
        error=>console.log(error));
    }

  }

  /*onItemChange()
  {
    this.pharmaServ.getAll().subscribe(response=>{console.log(response);
    this.listPharma=response.filter(res=>
    {return res.ville.nom.toLowerCase().match(this.ville.nom.toLowerCase())});

  },
    (error:HttpErrorResponse)=>{
     alert(error.message);
    });

  }*/

 /* save()
  {
    console.log(this.med);
    this.pharmaServ.getById(this.med.pharmacie.id).subscribe(data=>{this.med.pharmacie=data},
    error=>console.log(error));
    this.medServ.post(this.med).subscribe(data=>{console.log(data)},
     error=>console.log(error));
     this.goToMedList();
  }*/




}
