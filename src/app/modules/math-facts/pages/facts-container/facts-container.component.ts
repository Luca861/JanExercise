import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './facts-container.component.html',
  styleUrls: ['./facts-container.component.scss']
})
export class FactsContainerComponent implements OnInit {

  evenFacts : string [] = [];
  oddFacts : string [] = [];

  constructor() { }

  ngOnInit(): void {
  }

  even(item:string):void{
    this.evenFacts.push(item);
  }

  odd(item:string):void{
    this.oddFacts.push(item);
  }

}
