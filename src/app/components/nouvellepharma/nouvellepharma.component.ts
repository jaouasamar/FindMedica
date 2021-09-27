import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nouvellepharma',
  templateUrl: './nouvellepharma.component.html',
  styleUrls: ['./nouvellepharma.component.css']
})
export class NouvellepharmaComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  cancelClick():void{
    this.route.navigate(['pharmacie']);
  }


}
