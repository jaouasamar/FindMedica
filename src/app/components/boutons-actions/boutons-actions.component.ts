import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-boutons-actions',
  templateUrl: './boutons-actions.component.html',
  styleUrls: ['./boutons-actions.component.css']
})
export class BoutonsActionsComponent implements OnInit {

  @Input()
  isNouveauVisible:Boolean=true;

  @Input()
  isExporterVisible:Boolean=true;

  @Input()
  isImporterVisible:Boolean=true;

  @Output()
  clickEvent=new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  boutonNouveauClick():void{
    this.clickEvent.emit();
  }

}
