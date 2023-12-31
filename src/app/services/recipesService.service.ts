import { EventEmitter } from '@angular/core';
import { Recipe } from '../recipes/recipe-list/recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class recipesService {
  public recipeChanged: Subject<Recipe[]> = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      'Pizza',
      'Delicious Pizza',
      'https://2trendies.com/hero/2023/04/pizzapepperoni.jpg?width=1200&aspect_ratio=16:9',
      [
        new Ingredient('Tomato', 1),
        new Ingredient('Pineapple', 20),
        new Ingredient('York', 30),
      ]
    ),
    new Recipe(
      'Pasta',
      'Delicious Pasta',
      'https://imagenes.20minutos.es/files/image_990_v3/uploads/imagenes/2023/01/30/pasta-alfredo.jpeg',
      [new Ingredient('Spagueti', 100), new Ingredient('Tomato Sauce', 20)]
    ),
    new Recipe(
      'Omellete',
      'What a wonderful Omelette',
      'https://www.recetasderechupete.com/wp-content/uploads/2020/11/Tortilla-de-patatas-4.jpg',
      [new Ingredient('Potatoes', 6), new Ingredient('Eggs', 3)]
    ),
  ];

  public getRecipes() {
    return this.recipes;
  }
  public getRecipe(id: number) {
    return this.recipes[id];
  }

  public addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes);
  }

  public updateRecipe(index: number, recipe: Recipe) {
    this.recipes[index] = recipe;
    this.recipeChanged.next(this.recipes);
  }

  public deleteRecipe(index:number) {
   
    
    this.recipes.splice(index, 1)
  }
}
