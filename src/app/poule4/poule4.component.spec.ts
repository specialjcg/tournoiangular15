import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Poule4Component } from './poule4.component';

describe('Poule4Component', () => {
  let component: Poule4Component;
  let fixture: ComponentFixture<Poule4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Poule4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Poule4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
