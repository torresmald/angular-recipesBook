import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { recipesService } from 'src/app/services/recipesService.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss'],
})
export class RecipeItemComponent implements OnInit {
  public recipe: Recipe;
  @Input() index: number;
  constructor(private recipesService:recipesService) {}


  ngOnInit(): void {
      this.recipe = this.recipesService.getRecipe(this.index)
  }
  
}
