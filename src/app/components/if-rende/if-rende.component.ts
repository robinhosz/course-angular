import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-if-rende',
  templateUrl: './if-rende.component.html',
  styleUrls: ['./if-rende.component.css']
})
export class IfRendeComponent implements OnInit {

  canShow: boolean = true;
  name: string = 'r';

  constructor() { }

  ngOnInit(): void {
  }

}
