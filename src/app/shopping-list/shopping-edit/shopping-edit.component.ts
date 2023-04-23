import { Component, ElementRef, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingService } from '../shopping.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {


  constructor(private shoppingService: ShoppingService){}

  onSubmit(form:NgForm){
    this.shoppingService.addIngredient(new Ingredient(form.value.name, form.value.amount));

  }


}
