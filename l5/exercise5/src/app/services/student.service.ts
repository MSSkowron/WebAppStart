import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Student } from '../models/student.model';
@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private dbPath = '/students';
  studentsRef : AngularFirestoreCollection<Student>;
  constructor(private db: AngularFirestore) {
    this.studentsRef = db.collection(this.dbPath);
  }
  getAll():AngularFirestoreCollection<Student>{
    return this.studentsRef;
  }
  create(student:Student):any {
    return this.studentsRef.add({...student});
  }
  update(id:string, data:any):Promise<void>{
    return this.studentsRef.doc(id).update(data);
  }
  delete(id:string) : Promise <void>{
    return this.studentsRef.doc(id).delete();
  }
}
