import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  @Input() name: string = '';
  @Input() userData!: {email: string, role: string}

  constructor() { }

  ngOnInit(): void {
  }

}
