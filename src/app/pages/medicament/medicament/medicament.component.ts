import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Medicament } from 'src/app/models/medicament.model';
import { MedicamentServiceService } from 'src/app/services/medicament-service.service';

@Component({
  selector: 'app-medicament',
  templateUrl: './medicament.component.html',
  styleUrls: ['./medicament.component.css']
})
export class MedicamentComponent implements OnInit {

  listMed:Array<Medicament>=[];

  constructor(private router:Router,private medServ: MedicamentServiceService)
  { }

  ngOnInit(): void {
    this.medServ.getAll().subscribe(
      data=>{
        this.listMed=data;
      });
  }
  nouveauMedica():void{
    {
    this.router.navigate(['nouveauMedicament']);
    }
}
}

