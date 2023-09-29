import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.scss']
})
export class EditRecipeComponent implements OnInit {
  public id: number
  constructor(private router:ActivatedRoute){}
  ngOnInit(): void {
      this.router.params.subscribe((param) => {
        this.id = +param['id']        
      })
  }
}
