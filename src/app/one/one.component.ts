import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrl: './one.component.scss'
})
export class OneComponent implements OnInit{

  constructor() { }
  onSave(event :any){
    console.log("Save button is clicked!", event);
  }
  onDivClick(){
    console.log("DIV is clicked");
  }
  ngOnInit(): void {
      
  }
}
