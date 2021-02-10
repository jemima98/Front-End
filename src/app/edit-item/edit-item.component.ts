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
  
  itemid:any
  
   
  
  
  constructor(public apiService: ApiService, private route:ActivatedRoute,public router:Router) {
   
  }
  
  ngOnInit() {
    this.route.paramMap.subscribe(parameterMap => {
      const id = parameterMap.get('id');
      this.getItem(id);
      this.itemid=id;
      
    });
  }
  
  private getItem(id:any)
  {
    if(id !=0){
      this.items= this.apiService.getItem(id).subscribe(
        (item) => { this.items = item;
          console.log(this.items)
        });
      this.panelTitle = 'Edit Item';
    }
    else{
      this.panelTitle = 'Add Item';
      this.items ={
        itemId :"",
        itemName :"",
        price : "",
        quantity :"",
        weightInGrams:"",
        availableDate:"",
        isVeg :"",
        isSpecial :""
        
      }
      
    }
    
  }
  addClick(items:any){
    if(confirm('Are you sure??')){
      this.apiService.postItem(items);
      this.router.navigate(['/admin'])
        //this.refreshItems();
  }
}

  editClick(items:any){
    if(confirm('Are you sure??')){
      this.apiService.putItem(items);
      this.router.navigate(['/admin'])
        //this.refreshItems();  
  }
}

  refreshItems(){
    this.apiService.getItems().subscribe(data=>{
     this.items=data;
    });
 }


}

