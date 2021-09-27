import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cmd-user',
  templateUrl: './cmd-user.component.html',
  styleUrls: ['./cmd-user.component.css']
})
export class CmdUserComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  cancelClick():void{
    this.route.navigate(['MedUser'])

  }
}
