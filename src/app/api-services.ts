import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { getTranslationDeclStmts } from '@angular/compiler/src/render3/view/template';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 


  constructor(public http: HttpClient) { }


  getItems(){
    return this.http.get("https://localhost:44369/swagger/index.html");
  }
  getItem(id:any){
    return this.http.get('http://localhost:44319/api/Bakery/${id}')
    }
  
  postItem(item: any){
    this.http.post('https://localhost:44369/swagger/index.html',item).subscribe(res => {
        console.log(res);
    })

}

  deleteItem(item:any){
     this.http.delete('http://localhost:44319/api/Bakery/${item.itemId}',item).subscribe(res => {
      console.log(res);
  });
}

  putItem(Item: any){
    this.http.put(`http://localhost:44319/api/Bakery/${Item.itemId}`,Item).subscribe(res => {
        console.log(res);
    });
  }
  
  getUsers()
  {
    return this.http.get("https://localhost:44319/api/User");
  }
 
  /*deleteItem(item: any){
    this.http.delete(`http://localhost:44319/api/Bakery/${item.itemId}`,item).subscribe(res => {
        console.log(res);
       
    });
  }*/
 

}
