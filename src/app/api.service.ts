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
    return this.http.get("https://localhost:44306/api/Bakery");
  }
  getItem(id:any){
    return this.http.get(`https://localhost:44306/api/Bakery/${id}`)
    }
  
  postItem(Item: any){
    this.http.post("https://localhost:44306/api/Bakery",Item).subscribe(res => {
        console.log(res)
    });
  }

  deleteItem(Item: any){
    this.http.delete(`https://localhost:44306/api/Bakery/${Item.itemId}`,Item).subscribe(res => {
      console.log(res)
  });
  }

  putItem(Item: any){
    this.http.put(`https://localhost:44306/api/Bakery/${Item.itemId}`,Item).subscribe(res => {
        console.log(res);
    });
  }
  
  getUsers()
  {
    return this.http.get("https://localhost:44306/api/User");
  }
  postUsers(user:any)
  {
    return this.http.post("https://localhost:44306/api/User",user);
  }
}