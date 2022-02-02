import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloQ1Component } from './hello-q1.component';

describe('HelloQ1Component', () => {
  let component: HelloQ1Component;
  let fixture: ComponentFixture<HelloQ1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelloQ1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloQ1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
