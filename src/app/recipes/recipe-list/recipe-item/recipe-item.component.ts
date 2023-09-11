import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { recipesService } from 'src/app/services/recipesService.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss'],
})
export class RecipeItemComponent {
  @Input() recipe: Recipe;

  constructor(private recipesService:recipesService) {}

  public onSelectItem() {        
    this.recipesService.selectedRecipe.emit(this.recipe)
  }
}
