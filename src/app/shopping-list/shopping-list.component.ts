import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from './shopping.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
 ingredients:Ingredient[];
 ingredientsSub:Subscription;

 constructor(private shoppingService: ShoppingService){}

 ngOnInit(){
  this.ingredients = this.shoppingService.getIngredients()
  this.ingredientsSub = this.shoppingService.ingredientsChanged.subscribe((ingredients:Ingredient[]) => {
    this.ingredients = ingredients;
  })
 }

 ngOnDestroy(): void {
     this.ingredientsSub.unsubscribe();
 }

}
