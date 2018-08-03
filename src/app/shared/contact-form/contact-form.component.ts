import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { APIService } from '../../database/api.service';

interface Contact {
  nombre: string;
  email: string;
  tema: string;
  mensaje: string;
}



@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})

export class ContactFormComponent implements OnInit {

  public loading:boolean = false;
  constructor(public API:APIService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const formData = form.value;
    let data: Contact = {
      nombre:formData.nombre,
      email:formData.email,
      tema:formData.tema,
      mensaje:formData.mensaje,
    }
    this.loading = true;

    this.API.sendContact(data)
      .then(success =>{
        this.loading = false;
        console.log('Exito');
        success.update({id:success.id})
          .then(s=>console.log('Actualizado') )
          .catch(err=>console.error(err));
      })
        .catch();

  }

}
