import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistancePageComponent } from './assistance-page.component';

describe('AssistancePageComponent', () => {
  let component: AssistancePageComponent;
  let fixture: ComponentFixture<AssistancePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssistancePageComponent]
    });
    fixture = TestBed.createComponent(AssistancePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
