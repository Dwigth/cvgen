import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as jsPDF from 'jspdf';
import * as html2canvas from 'html2canvas';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.scss']
})
export class GeneratorComponent implements OnInit {

  public nombre: string = '';
  public apellidos: string = '';
  public direccion: string = '';
  public contacto: string = '';
  public fechanacimieno: string = '';
  public objetivo: string = '';
  public img: string = '../../../assets/img/user.jpg';

  public contactos: string[] = [];
  public idiomas: string[] = [];
  public hsoft: string[] = [];
  public personalidad: string[] = [];
  public exp: string[] = [];
  public educacion: string[] = [];
  public pasatiempos: string[] = [];
  public habilidades: string[] = [];

  @ViewChild('contenido') contenido: ElementRef;


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
    } else {
      array.length = 0;
    }
  }

  allocateValue(event: Event, array: any[], i: number, data: string) {
    const value = (<HTMLInputElement>event.srcElement).value;
    array[i][data] = value;

  }

  saveDoc() {
    const userData = {
      nombre: this.nombre,
      apellidos: this.apellidos,
      direccion: this.direccion,
      contacto: this.contacto,
      fechanacimieno: this.fechanacimieno,
      objetivo: this.objetivo,
      img: this.img,
      idiomas: this.idiomas,
      hsoft: this.hsoft,
      personalidad: this.personalidad,
      exp: this.exp,
      educacion: this.educacion,
      pasatiempos: this.pasatiempos,
      habilidades: this.habilidades,
    }
    console.log(userData);
    
  }

  downloadPDF() {
    // let doc = new jsPDF();
    // let specialElementHandlers = {
    //   '#editor':function(element,renderer){
    //     return true;
    //   }
    // };

    // let content = this.contenido.nativeElement;

    // doc.fromHTML( content.innerHTML,15,15,{
    //   'width':200,
    //   'elementHandlers':specialElementHandlers
    // },function (params) {
    //   doc.save('test.pdf');
    // });
    html2canvas(document.getElementById('contenido')).then((canvas) => {
      var img = canvas.toDataURL("image/png");
      var doc = new jsPDF();
      doc.addImage(img, 'JPEG', 0, 0);
      doc.save(`${this.nombre}.pdf`);
    });

  }



}
