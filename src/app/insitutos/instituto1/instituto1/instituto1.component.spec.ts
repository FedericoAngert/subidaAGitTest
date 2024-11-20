import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Instituto1Component } from './instituto1.component';

describe('Instituto1Component', () => {
  let component: Instituto1Component;
  let fixture: ComponentFixture<Instituto1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Instituto1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Instituto1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
