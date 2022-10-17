import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class ServiceArticleFireService {

  constructor(private db: AngularFirestore){}

  getAllArticles() {
    return new Promise<any>((resolve)=> {
    this.db.collection('Article').valueChanges({ idField: 'id' }).subscribe(articles => resolve(articles));
    })
   }

 
}
