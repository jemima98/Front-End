import { Component, OnInit } from '@angular/core';
import{ApiService} from '../api.service';
import{ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent  {
  panelTitle:any
  items: any = {} 
  
    itemName =""
    price= ""
    quantity=""
    weightInGrams=""
    isVeg=""
    isSpecial=""
    kcal=""
    availableDate=""
  
  
  constructor(public apiService: ApiService, private route:ActivatedRoute) {
   
  }
  
  ngOnInit() {
    this.route.paramMap.subscribe(parameterMap => {
      const id = parameterMap.get('id')
      this.getItem(id)
    });
  }
  
  private getItem(id:any)
  {
    if(id !=0){
      this.items= this.apiService.getItem(id).subscribe(
        (item) => { this.items = item
          console.log(this.items)
        });
      this.panelTitle = 'Edit Employee';
    }
    else{
      this.panelTitle = 'Create Employee';
      this.items ={
        itemName :"",
        price : "",
        quantity :"",
        weightInGrams:""
        
      }
    }
    
  }

}