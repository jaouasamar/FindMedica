import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { MedicamentServiceService } from 'src/app/services/medicament-service.service';
import { Medicament } from 'src/app/models/medicament.model';
import { Pharmacie } from 'src/app/models/pharmacie.model';

@Component({
  selector: 'app-serach',
  templateUrl: './serach.component.html',
  styleUrls: ['./serach.component.css']
})
export class SerachComponent implements OnInit {
  searchTerm:String="";
  listMedica:Medicament[]=[];
  listfar:Pharmacie[]=[];


  constructor(private medS : MedicamentServiceService) {
  }
  ngOnInit(): void {
    this.medS.getAll().subscribe(
      response=>{console.log(response);
        this.listMedica=response;

      },
      (error:HttpErrorResponse)=>{
       alert(error.message);
      });
     }

Search(){

if(this.searchTerm==""){
  this.ngOnInit();
}
else
{
  this.listMedica=this.listMedica.filter(res=>{console.log(res);
   return res.nom?.toLowerCase().match(this.searchTerm.toLocaleLowerCase());
  })
}
}
SearchByVille(){
  this.listMedica=this.listMedica.filter(res=>{console.log(res);
    return res.nom?.toLowerCase().match(this.searchTerm.toLocaleLowerCase())});
}
}







