import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-med-pharm-user',
  templateUrl: './detail-med-pharm-user.component.html',
  styleUrls: ['./detail-med-pharm-user.component.css']
})
export class DetailMedPharmUserComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  commander():void{
    this.route.navigate(['CmdUser']);
  }
}
