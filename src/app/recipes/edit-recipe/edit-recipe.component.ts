import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { recipesService } from 'src/app/services/recipesService.service';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.scss'],
})
export class EditRecipeComponent implements OnInit {
  public id: number;
  public recipeForm: FormGroup;
  public editMode: boolean = false;
  public imageForm: string = ''

  constructor(
    private router: ActivatedRoute,
    private route: Router,
    private fb: FormBuilder,
    private recipesService: recipesService
  ) {}

  ngOnInit(): void {
    this.router.params.subscribe((param) => {
      this.id = +param['id'];
      this.editMode = param['id'] != null;
      this.initForm();
    });

    this.recipeForm.valueChanges.subscribe((value) => {    
      this.imageForm = value?.imagePath
    })
  }

  private initForm() {
    let recipeName = '';
    let recipeDescription = '';
    let recipeImage = '';
    let recipeIngredient = new FormArray([]);

    if (this.editMode) {
      const recipe = this.recipesService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeDescription = recipe.description;
      recipeImage = recipe.imagePath;

      for (let ingredient of recipe.ingredients) {
        recipeIngredient.push(
          new FormGroup({
            name: new FormControl(ingredient.name, Validators.required),
            amount: new FormControl(ingredient.amount, [
              Validators.required,
              Validators.min(0),
            ]),
          })
        );
      }
    }

    this.recipeForm = this.fb.group({
      name: new FormControl(recipeName, Validators.required),
      description: new FormControl(recipeDescription, Validators.required),
      imagePath: new FormControl(recipeImage, Validators.required),
      ingredients: recipeIngredient,
    });
  }

  getControls() {
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }

  public onAddIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        name: new FormControl('', Validators.required),
        amount: new FormControl('', [Validators.required, Validators.min(0)]),
      })
    );
  }

  public onClear(){
    this.recipeForm.reset()
  }
  public onSubmit() {
    if (this.editMode) {
      this.recipesService.updateRecipe(this.id, this.recipeForm.value);
    } else {
      this.recipesService.addRecipe(this.recipeForm.value);
      this.recipeForm.reset()
      this.route.navigate(['/recipes'])
    }
  }

  public onDeleteIngredient(index:number){
   (<FormArray>this.recipeForm.get('ingredients')).removeAt(index)
  }
}
