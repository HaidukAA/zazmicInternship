import { Injectable } from "@angular/core";
import { IArticle } from 'src/app/common/models/interfaces/data.model';

import { AngularFirestore } from "@angular/fire/compat/firestore";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class BlogService {
  constructor(private db: AngularFirestore) {}

  createPost(post: IArticle) {
    const postData = JSON.parse(JSON.stringify(post));
    return this.db.collection("articles").add(postData);
  }

  getAllPosts(): Observable<IArticle[]> {
    const articles = this.db
      .collection<IArticle>("articles", (ref) => ref.orderBy("createdArticle"))
      .snapshotChanges()
      .pipe(
        map((actions) => {
          return actions.map((c) => ({
            
            postId: c.payload.doc.id,
            ...c.payload.doc.data(),
          }));
        })
      );
    return articles;
  }

  getPostbyId(id: number): Observable<IArticle | undefined> {
    const blogDetails = this.db.doc<IArticle>("articles/" + id).valueChanges();
    return blogDetails;
  }

  updatePost(postId: number, post: IArticle) {
    const putData = JSON.parse(JSON.stringify(post));
    return this.db.doc("articles/" + postId).update(putData);
  }

  deletePost(postId: number) {
    return this.db.doc("articles/" + postId).delete();
  }
}
