import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Poule5Component } from './poule5.component';

describe('Poule4Component', () => {
  let component: Poule5Component;
  let fixture: ComponentFixture<Poule5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Poule5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Poule5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
