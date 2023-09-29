import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonIngredientComponent } from './button-ingredient.component';

describe('ButtonIngredientComponent', () => {
  let component: ButtonIngredientComponent;
  let fixture: ComponentFixture<ButtonIngredientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonIngredientComponent]
    });
    fixture = TestBed.createComponent(ButtonIngredientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
