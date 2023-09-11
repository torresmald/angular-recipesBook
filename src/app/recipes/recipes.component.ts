import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from './recipe-list/recipe.model';
import { recipesService } from '../services/recipesService.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent implements OnInit {
  @Input() path: string;
  public selectedRecipe:Recipe

  constructor(private recipesService:recipesService) {}
  
  ngOnInit(): void {
      this.recipesService.selectedRecipe.subscribe((recipe:Recipe) => {
        this.selectedRecipe = recipe
      })
  }
  
}
