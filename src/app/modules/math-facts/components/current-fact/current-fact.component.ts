import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MathfactService } from '../../service/mathfact.service';

@Component({
  selector: 'app-current-fact',
  templateUrl: './current-fact.component.html',
  styleUrls: ['./current-fact.component.scss']
})
export class CurrentFactComponent implements OnInit {

  @Output() even = new EventEmitter<string>();
  @Output() odd = new EventEmitter<string>();

  currentFact:string = '';



  constructor(private readonly service:MathfactService) { }

  ngOnInit(): void {
    this.getData();
  }

  public getData():void {
    this.service.getFact().subscribe((resp)=> this.currentFact = resp)
  }

  public evenFacts():void{
    this.even.emit(this.currentFact)
    this.getData()
  }

  public oddFacts():void{
    this.odd.emit(this.currentFact)
    this.getData()
  }
}
