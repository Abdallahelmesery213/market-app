import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  @Input() data:any[] = [];
  @Output() selectedValue = new EventEmitter();



  constructor() { }

  ngOnInit(): void {}

  selectChange(event:any){
    this.selectedValue.emit(event);
  }

}
