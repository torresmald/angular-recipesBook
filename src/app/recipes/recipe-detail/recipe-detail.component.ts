import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe-list/recipe.model';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { shoppingListService } from 'src/app/services/shoppingListService.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss'],
})
export class RecipeDetailComponent {
  constructor(private shoppingListService: shoppingListService) {}

  @Input() recipe: Recipe;
  public ingredients: Ingredient[] = [];


  public selectedIgredient(ingredient: Ingredient) {
      alert('Ingredient Added' + ' ' + ingredient.name);
      this.ingredients.push(ingredient);
  }

  public onAddToShoppingList(ingredients: Ingredient[]) {
    if(ingredients.length === 0){
      alert('Nothing to Add to Shopping List')
      return
    }
    this.shoppingListService.addToShoppingList(ingredients);
  }
}
