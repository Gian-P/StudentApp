import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistanceTableComponent } from './assistance-table.component';

describe('AssistanceTableComponent', () => {
  let component: AssistanceTableComponent;
  let fixture: ComponentFixture<AssistanceTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssistanceTableComponent]
    });
    fixture = TestBed.createComponent(AssistanceTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
