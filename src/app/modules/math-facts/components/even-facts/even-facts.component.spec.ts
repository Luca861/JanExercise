import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvenFactsComponent } from './even-facts.component';

describe('EvenFactsComponent', () => {
  let component: EvenFactsComponent;
  let fixture: ComponentFixture<EvenFactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvenFactsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvenFactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
