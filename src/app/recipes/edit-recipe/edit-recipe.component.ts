import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { recipesService } from 'src/app/services/recipesService.service';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.scss']
})
export class EditRecipeComponent implements OnInit {
  public id: number
  public recipeForm:FormGroup
  constructor(private router:ActivatedRoute, private fb:FormBuilder, private recipesService:recipesService){}
  ngOnInit(): void {
      this.router.params.subscribe((param) => {
        this.id = +param['id']        
      })
      this.recipeForm = this.fb.group({
        name: new FormControl(''),
        description: new FormControl(''),
        imagePath: new FormControl(''),
        ingredients: new FormControl('')
      })
  }

  public onSubmit() {
    console.log(this.recipeForm.value);
    this.recipesService.addRecipe(this.recipeForm.value)
  }
}
