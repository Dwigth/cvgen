import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.scss']
})
export class GeneratorComponent implements OnInit {

  public img: string = '../../../assets/img/user.jpg';
  public contactos: string[] = [];

  public idiomas: string[] = [];
  public hsoft: string[] = [];
  public personalidad: string[] = [];
  public exp: string[] = [];
  public educacion: string[] = [];
  public pasatiempos: string[] = [];




  constructor() { }

  ngOnInit() {
    this.contactos.push('Página Web', 'Dirección', 'Telefono', 'Email');
    console.log(this.contactos);

  }

  getImgName(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.onload = (event: ProgressEvent) => {
        this.img = (<FileReader>event.target).result;
      }

      reader.readAsDataURL(event.target.files[0]);
    }
  }

  validateLength(n: number, array: any[], data) {
    n = +n;
    if (n > 0 && n <= 5) {
      array.length = n;
      for (let index = 0; index < n; index++) {
        array[index] = { ...data };
      }
    }else{
      array.length = 0;
    }
  }

  allocateValue(event: Event, array: any[], i: number, data: string) {
    const value = (<HTMLInputElement>event.srcElement).value;
    array[i][data] = value;

  }



}
