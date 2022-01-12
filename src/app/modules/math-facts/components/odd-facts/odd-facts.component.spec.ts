import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OddFactsComponent } from './odd-facts.component';

describe('OddFactsComponent', () => {
  let component: OddFactsComponent;
  let fixture: ComponentFixture<OddFactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OddFactsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OddFactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
