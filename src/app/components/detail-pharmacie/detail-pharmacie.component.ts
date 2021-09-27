import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Pharmacie } from 'src/app/models/pharmacie.model';
import { PharmacieServiceService } from 'src/app/services/pharmacie-service.service';

@Component({
  selector: 'app-detail-pharmacie',
  templateUrl: './detail-pharmacie.component.html',
  styleUrls: ['./detail-pharmacie.component.css']
})
export class DetailPharmacieComponent implements OnInit {

 /* pharma:Pharmacie[] | undefined ;
  constructor(//private pharmser: PharmacieServiceService) {
}
 public getPharmacies():void{
   this.pharmser.getAll().subscribe(
     (response:Pharmacie[])=>{
       this.pharma=response;
     },
     (error:HttpErrorResponse)=>{
      alert(error.message);
     }

   );
 }


  ngOnInit(): void {
    this.getPharmacies();
  }*/

  constructor(){

  }
ngOnInit():void{

}
}
