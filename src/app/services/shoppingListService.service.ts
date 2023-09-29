import { Observable, Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';

export class shoppingListService {
  public deletedIngredients: Subject<Ingredient[]> = new Subject<
    Ingredient[]
  >();
  public ingredientsChanged: Subject<Ingredient[]> = new Subject<
    Ingredient[]
  >();

  public editIngredient: Subject<number> = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 4),
    new Ingredient('Tomatoes', 10),
  ];

  public getIngredients() {
    return this.ingredients;
  }

  public getIngredient(index: number) {
    return this.ingredients[index];
  }

  public addIngredient(ingredient: Ingredient) {
    console.log(ingredient);
    const existIngredient = this.ingredients.find(
      (ing) => ing.name === ingredient.name
    );
    console.log(existIngredient);

    if (existIngredient?.name === ingredient.name) {
      alert('This ingredient is already in Shopping List');
      return;
    }
    this.ingredients.push(ingredient);
  }

  public updateIngredient(index: number, ingredient: Ingredient) {
    this.ingredients[index] = ingredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  public deleteIngredients() {
    const clearAllIngredients = this.ingredients.splice(0);
    this.deletedIngredients.next(clearAllIngredients);
  }



  public deleteIngredient(index: number) {
    this.ingredients.splice(index, 1)
    this.ingredientsChanged.next(this.ingredients.slice())
  }

  public addToShoppingList(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
  }
}
