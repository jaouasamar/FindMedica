import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nouvelle-cmd-clt-frs',
  templateUrl: './nouvelle-cmd-clt-frs.component.html',
  styleUrls: ['./nouvelle-cmd-clt-frs.component.css']
})
export class NouvelleCmdCltFrsComponent implements OnInit {

  origin='';
  constructor(private activateRoute:ActivatedRoute,private route:Router) { }

  ngOnInit(): void {

    this.activateRoute.data.subscribe(
      data=>{this.origin=data.origin}
    )
    }
  cancelClick(): void{
    if(this.origin==="utilisateur")
      this.route.navigate(['cmdClt']);
    else if (this.origin==="fournisseur")
    this.route.navigate(['cmdFrs']);
    }

  }




