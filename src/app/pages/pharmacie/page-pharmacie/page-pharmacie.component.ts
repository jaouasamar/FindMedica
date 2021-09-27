import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-page-pharmacie',
  templateUrl: './page-pharmacie.component.html',
  styleUrls: ['./page-pharmacie.component.css']
})
export class PagePharmacieComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {

  }
  nouvellepharma():void{
    this.router.navigate(['nouvellePharma'])
  }

}
