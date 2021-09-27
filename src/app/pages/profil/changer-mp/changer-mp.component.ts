import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-changer-mp',
  templateUrl: './changer-mp.component.html',
  styleUrls: ['./changer-mp.component.css']
})
export class ChangerMPComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }


  cancelClick():void{
    this.router.navigate(['profil']);
  }

}
