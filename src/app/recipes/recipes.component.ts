import { Component, Input } from '@angular/core';
import { Recipe } from './recipe-list/recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent {
  @Input() path: string;
  public recipe:Recipe

  public passRecipe(value){
    this.recipe=value
  }
}
