import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public isRecipe: boolean = true;
  public currentPath: string = '';

  public onNavigate(value: string) {
    this.currentPath = value;
    if (value === 'recipes') {
      this.isRecipe = false;
    } else {
      this.isRecipe = true;
    }
  }


  
}
