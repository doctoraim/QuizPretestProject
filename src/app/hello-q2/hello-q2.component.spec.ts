import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloQ2Component } from './hello-q2.component';

describe('HelloQ2Component', () => {
  let component: HelloQ2Component;
  let fixture: ComponentFixture<HelloQ2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelloQ2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloQ2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
