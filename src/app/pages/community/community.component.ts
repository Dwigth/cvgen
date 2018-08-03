import { Component, OnInit } from '@angular/core';
import { APIService } from '../../database/api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss']
})
export class CommunityComponent implements OnInit {

  public loading:boolean = false;
  docs:Observable<any>;
  constructor(public API:APIService) { }

  ngOnInit() {
    this.docs = this.API.getContacts();
  }

  delete({id}){
   if(confirm('¿Está seguro?')){
     this.API.deleteContact(id)
      .then(success =>{  
        this.loading = false;
      })
      .catch(err=>{
        alert(err);
      })
   }
  }

}
