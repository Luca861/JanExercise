import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentFactComponent } from './current-fact.component';

describe('CurrentFactComponent', () => {
  let component: CurrentFactComponent;
  let fixture: ComponentFixture<CurrentFactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentFactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentFactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
