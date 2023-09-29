import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe-list/recipe.model';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { shoppingListService } from 'src/app/services/shoppingListService.service';
import { ActivatedRoute } from '@angular/router';
import { recipesService } from 'src/app/services/recipesService.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss'],
})
export class RecipeDetailComponent implements OnInit {
  constructor(
    private shoppingListService: shoppingListService,
    private recipeService: recipesService,
    private router: ActivatedRoute
  ) {}

  recipe: Recipe;
  public id: number;
  public ingredients: Ingredient[] = [];

  ngOnInit(): void {
    this.router.params.subscribe((param) => {
      (this.id = +param['id'])
      this.recipe = this.recipeService.getRecipe(this.id)
    })
  }

  public onAddToShoppingList(ingredients: Ingredient[]) {
    if (ingredients.length === 0) {
      alert('Nothing to Add to Shopping List');
      return;
    }
    this.shoppingListService.addToShoppingList(ingredients);
  }
}
