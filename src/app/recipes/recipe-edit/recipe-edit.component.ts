import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit,OnDestroy {
  id:number;
  editMode = false;
  private idSub: Subscription;

  constructor(private route:ActivatedRoute){}

  ngOnInit(): void {
    this.idSub = this.route.params.subscribe((params:Params)=>{
      this.id = params['id'];
      this.editMode = params['id'] != null;
    })
  }

  ngOnDestroy(): void {
      this.idSub.unsubscribe();
  }



}
