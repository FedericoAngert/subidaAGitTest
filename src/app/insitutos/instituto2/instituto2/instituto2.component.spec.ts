import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Instituto2Component } from './instituto2.component';

describe('Instituto2Component', () => {
  let component: Instituto2Component;
  let fixture: ComponentFixture<Instituto2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Instituto2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Instituto2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
