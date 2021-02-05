import { Component, OnInit } from '@angular/core';
import{ApiService} from '../api.service';
import{Router} from '@angular/router';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent  {
  items:any
  constructor(public apiService: ApiService,public router:Router) {
    this.apiService.getItems().subscribe((res:any) =>{
      this.items = res
      console.log(this.items)
    })
 
    } 
    ngOnInit(): void {}

  onClick(id:number)
  {
      this.router.navigate(['/edit-item/',id]);
  }
  addClick()
  {
    this.router.navigate(['/edit-item/0']);
  }

  /*deleteClick(item:any){
    if(confirm('Are you sure??')){
      this.apiService.deleteItem(item.itemId).subscribe(data=>{
        console.log(data)
        this.refreshEmpList();
      })
    }
  }
  refreshEmpList(){
    this.apiService.getItems().subscribe(data=>{
      this.items=data;
    });
  }*/
      
}