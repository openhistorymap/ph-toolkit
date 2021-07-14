import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoreferenceComponent } from './georeference.component';

describe('GeoreferenceComponent', () => {
  let component: GeoreferenceComponent;
  let fixture: ComponentFixture<GeoreferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeoreferenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeoreferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
