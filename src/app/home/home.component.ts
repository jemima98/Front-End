import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import{ApiService} from '../api.service';
import{Router} from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Email :string ="bakedinheaven@gmail.com";
  Phone:string = "9987235100"

  users :any;
  constructor(public apiService:ApiService,public router:Router) { 
    this.apiService.getUsers().subscribe((res:any) => {
      this.users = res
      console.log(res);
    })
  }

  ngOnInit(): void {
  }
  namevalue :any;
  passvalue:any;
  login(){
    for (var element of this.users)
      {
      if((this.namevalue==element.userName)&&(this.passvalue==element.password))
      {
        this.router.navigateByUrl('/items');
      }
    }
    }
}