import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradesFormComponent } from './grades-form.component';

describe('GradesFormComponent', () => {
  let component: GradesFormComponent;
  let fixture: ComponentFixture<GradesFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GradesFormComponent]
    });
    fixture = TestBed.createComponent(GradesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
