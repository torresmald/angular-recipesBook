import { Observable, Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';


export class shoppingListService {

  public deletedIngredients:Subject<Ingredient[]> = new Subject<Ingredient[]>()

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
    this.deletedIngredients.next(clearAllIngredients)
  }

  public addToShoppingList(ingredients: Ingredient[]) {
    console.log(ingredients);
    
    this.ingredients.push(...ingredients);
  }
}
