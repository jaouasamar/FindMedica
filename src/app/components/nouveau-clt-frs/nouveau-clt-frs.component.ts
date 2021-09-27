import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nouveau-clt-frs',
  templateUrl: './nouveau-clt-frs.component.html',
  styleUrls: ['./nouveau-clt-frs.component.css']
})
export class NouveauCltFrsComponent implements OnInit {

  origin='';

  constructor(private activatedRoute:ActivatedRoute,
    private route:Router) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(
      data=>{
        this.origin=data.origin;
      }
    )
  }
  cancelClick():void{
    if(this.origin==="utilisateur")
    this.route.navigate(['clients'])
    else if(this.origin==="fournisseur")
    this.route.navigate(['fournisseurs'])
  }


}
