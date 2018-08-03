import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public showSearchBar:boolean = false;
  public fakeData = { user:'dwigth32@outlook.es',password:'123456789' };

  public accessed:boolean = false;

  public email:string = '';
  public pass:string = '';

  constructor() { }

  ngOnInit() { 
    if(sessionStorage.getItem("auth")){
      this.email = sessionStorage.getItem("auth");
      this.accessed = true;
    }
    console.log(this.fakeData)
   }

   check(){ 
     console.log(this.email,this.pass);
     
     if(this.email === this.fakeData.user && this.pass === this.fakeData.password){
      this.accessed = true;
      sessionStorage.setItem('auth', this.email);
      console.log(this.accessed);
      
     }else {
      console.log(this.accessed);

       return;
     }
   }

  
}
