import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesClassComponent } from './pipes-class.component';

describe('PipesClassComponent', () => {
  let component: PipesClassComponent;
  let fixture: ComponentFixture<PipesClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipesClassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipesClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
