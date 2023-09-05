import { Component, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent {

  public ingredient?:Ingredient = {name: '', amount: 0}
  @Output() sendIngrendient:EventEmitter<Ingredient> = new EventEmitter<Ingredient>
  @Output() clearIngredients:EventEmitter<Ingredient> = new EventEmitter<Ingredient>


  public onAddIngredient() {
    this.sendIngrendient.emit(this.ingredient);
  }
  public onClearIngredient(){
    this.clearIngredients.emit();
  }
}
