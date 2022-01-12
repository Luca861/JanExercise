import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-even-facts',
  templateUrl: './even-facts.component.html',
  styleUrls: ['./even-facts.component.scss']
})
export class EvenFactsComponent implements OnInit {

  @Input() evenFacts : string [] = [];



  constructor() {

   }

  ngOnInit(): void {
  }



}
