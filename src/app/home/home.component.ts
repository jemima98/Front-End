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
  Phone:string = "9400557851"

  users :any=[];
  constructor(public apiService:ApiService,public router:Router) { 
    this.apiService.getUsers().subscribe((res:any) => {
      this.users = res
      console.log(res);
    })
  }

  ngOnInit(): void {
  }
  
  myusername :any;
  mypassword:any;
  login(){
   
    this.users.forEach((element:any) => {
      if((this.myusername == element.username)&&(this.mypassword== element.password))
      {
        if(element.isAdmin==true)
        {
          this.router.navigate(['/admin']);
          console.log(this.myusername)
        }
        else
        {
          this.router.navigate(['/items']);
        }
      }
     
    });
  
    }
    
    
  }
