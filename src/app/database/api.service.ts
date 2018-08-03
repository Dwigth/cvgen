import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Contact } from '../pages/generator/models/contact';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private afs: AngularFirestore) { }

  sendContact(data) {
    return this.afs.collection('contacts').add(data);
  }

  getContacts(): Observable<any> {
    return this.afs.collection('contacts').valueChanges();
  }

  deleteContact(id) {
    return this.afs.collection('contacts').doc(id).delete();
  }

}
