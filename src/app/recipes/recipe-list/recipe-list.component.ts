import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent {
  public recipes: Recipe[] = [
    new Recipe('Pizza', 'Una pizza exquisita', 'https://2trendies.com/hero/2023/04/pizzapepperoni.jpg?width=1200&aspect_ratio=16:9'),
    new Recipe ('pasta', 'Una pasta exquisita', 'https://imagenes.20minutos.es/files/image_990_v3/uploads/imagenes/2023/01/30/pasta-alfredo.jpeg'),
    new Recipe('tortilla', 'Menuda Tortillaca', 'https://www.recetasderechupete.com/wp-content/uploads/2020/11/Tortilla-de-patatas-4.jpg')
  ]
  @Output() selectedRecipe:EventEmitter<Recipe> = new EventEmitter()

  public onEmitRecipe(value) {
    this.selectedRecipe.emit(value)    
  }
}
