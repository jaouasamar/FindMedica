import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-med-user',
  templateUrl: './liste-med-user.component.html',
  styleUrls: ['./liste-med-user.component.css']
})
export class ListeMedUserComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  commander():void{
    this.router.navigate(['CmdUser']);
  }
}
