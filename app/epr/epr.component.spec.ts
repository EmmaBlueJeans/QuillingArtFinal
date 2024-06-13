import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EprComponent } from './epr.component';

describe('EprComponent', () => {
  let component: EprComponent;
  let fixture: ComponentFixture<EprComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EprComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EprComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
