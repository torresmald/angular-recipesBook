import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from 'src/app/recipes/recipe-list/recipe.model';
import { shoppingListService } from 'src/app/services/shoppingListService.service';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss'],
})
export class ShoppingEditComponent {

  public ingredient:Ingredient = {name: '', amount: 0}
  
  constructor(private shoppinListService:shoppingListService) {}

  public onAddIngredient() {
    this.shoppinListService.addIngredient(this.ingredient)
  }
  
  public onClearIngredients() {
    this.shoppinListService.clearIngredients()
  }

}
