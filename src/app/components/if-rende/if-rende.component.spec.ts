import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfRendeComponent } from './if-rende.component';

describe('IfRendeComponent', () => {
  let component: IfRendeComponent;
  let fixture: ComponentFixture<IfRendeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IfRendeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IfRendeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
