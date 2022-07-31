import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

  name: string = "Robson";
  age: number = 10;
  languages = ['Java', 'Angular'];
  constructor() { }

  ngOnInit(): void {
  }

}
