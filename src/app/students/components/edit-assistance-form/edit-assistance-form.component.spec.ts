import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAssistanceFormComponent } from './edit-assistance-form.component';

describe('EditAssistanceFormComponent', () => {
  let component: EditAssistanceFormComponent;
  let fixture: ComponentFixture<EditAssistanceFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditAssistanceFormComponent]
    });
    fixture = TestBed.createComponent(EditAssistanceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
