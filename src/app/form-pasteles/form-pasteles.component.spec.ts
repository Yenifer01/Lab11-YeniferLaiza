import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPastelesComponent } from './form-pasteles.component';

describe('FormPastelesComponent', () => {
  let component: FormPastelesComponent;
  let fixture: ComponentFixture<FormPastelesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormPastelesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormPastelesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
