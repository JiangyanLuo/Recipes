import { Component, OnDestroy, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingService } from 'src/app/shopping-list/shopping.service';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
  recipe:Recipe;
  id:number;
  private idSub: Subscription;

  constructor(private shoppingService: ShoppingService, private recipeService: RecipeService, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.idSub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.recipe = this.recipeService.getRecipeById(this.id)
    })
  }

  onAddToShoppingList(){
    this.shoppingService.addIngredients(this.recipe.ingredients);
  }

  ngOnDestroy(){
    this.idSub.unsubscribe();
  }

}
