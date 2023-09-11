import { Ingredient } from '../shared/ingredient.model';
import {EventEmitter} from '@angular/core'


export class shoppingListService {

  public deletedIngredients:EventEmitter<Ingredient[]> = new EventEmitter<Ingredient[]>()

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 4),
    new Ingredient('Tomatoes', 10),
  ];

  public getIngredients() {
    return this.ingredients;
  }

  public addIngredient(ingredient:Ingredient){
     this.ingredients.push(ingredient)
  }

  public clearIngredients () {
    const clearAllIngredients = this.ingredients.splice(0)
    this.deletedIngredients.emit(clearAllIngredients)
  }

  public addToShoppingList(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
  }
}
