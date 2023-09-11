import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { recipesService } from 'src/app/services/recipesService.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  public recipes:Recipe[]
  constructor(private recipesService:recipesService) {}

  ngOnInit(): void {
    this.recipes = this.recipesService.getRecipes()
  }

}
