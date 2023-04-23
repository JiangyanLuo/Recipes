import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes:Recipe[] = [
    new Recipe('C Test Recipe','Test','https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&webp=true&resize=300,272s',[new Ingredient('meat',1), new Ingredient('bread',2)]),
    new Recipe('A Test Recipe','Test','https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&webp=true&resize=300,272s',[new Ingredient('meat',2), new Ingredient('bread',2)]),
    new Recipe('B Test Recipe','Test','https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&webp=true&resize=300,272s',[new Ingredient('meat',3), new Ingredient('bread',2)])
  ];

  selectedRecipe = new Subject<Recipe> ()

  getRecipe() {
    return this.recipes.slice(); //return a copy
  }

  getRecipeById(id:number){
    return this.recipes[id];
  }

}
