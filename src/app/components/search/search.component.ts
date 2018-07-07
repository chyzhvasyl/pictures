import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent   {
  @Input() userName: string;
  @Output() userNameChange = new EventEmitter<string>();
  onNameChange(model: string) {

    this.userName = model;
    this.userNameChange.emit(model);
  }


  constructor() {   }



}
