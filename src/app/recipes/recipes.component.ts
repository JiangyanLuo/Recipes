import { Component, OnDestroy, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit, OnDestroy{
  recipe: Recipe;
  private recipeSub:Subscription;
  constructor(private recipeService: RecipeService){}
  ngOnInit(): void {
    this.recipeSub = this.recipeService.selectedRecipe.subscribe((recipe:Recipe) => {
      this.recipe = recipe;
    })
  }
  
  ngOnDestroy(): void {
    this.recipeSub.unsubscribe();
  }
  

  
}
