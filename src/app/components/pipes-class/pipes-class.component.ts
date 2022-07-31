import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-class',
  templateUrl: './pipes-class.component.html',
  styleUrls: ['./pipes-class.component.css']
})
export class PipesClassComponent implements OnInit {

  someText = "TEXTANDO O PIPE";

  today = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
