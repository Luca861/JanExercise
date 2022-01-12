import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-odd-facts',
  templateUrl: './odd-facts.component.html',
  styleUrls: ['./odd-facts.component.scss']
})
export class OddFactsComponent implements OnInit {

  @Input() oddFacts : string [] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
