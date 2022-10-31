import { Component, OnInit } from '@angular/core';
import { FormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { IArticle } from 'src/app/common/models/interfaces/data.model';
import { articles } from 'src/app/common/models/moockdata/data.moock';
import { ArticlesService } from 'src/app/services/article.service';


// import { ServiceArticleFireService } from 'src/app/services/service-article-fire.service'

@Component({
  selector: 'app-article-editor',
  templateUrl: './article-editor.component.html',
  styleUrls: ['./article-editor.component.scss']
})
export class ArticleEditorComponent implements OnInit{
  
  articles=articles;
  article: IArticle | undefined;
  
  form: UntypedFormGroup;
  
  labelTitle = 'Title';
  titleType = 'title';
  helperTitleText = 'up to 70 sumbols';

  labelAnnotation = 'Annotation';
  annotationType = 'annotation';
  helperAnnotationText = 'Couple of sentences';

  labeleditor = 'Editor';
  editorType = 'editor';
 
  helperImageEditText = 'jpg, png, jpeg';
  imageEditType = 'file';
  labelImageEdit = 'Drag image here or click to select';

  inputSVGImageEdit = 'assets/images/svg/upload-cloud.svg';

  button ='SAVE CHANGES';
  typeButton = 'submit';
  disable: boolean = true;
  buttonSVG = 'assets/images/svg/post_edit.svg';

  buttonCancel ='CANCEL';
  typeButtonCancel = 'CANCEL';
  disableCancel: boolean = true;
  buttonSVGCancel = 'assets/images/svg/Close.svg';

  // tslint:disable-next-line: no-empty
  constructor(private route: ActivatedRoute, 
    private router : Router,
    // private service: ServiceArticleFireService, 
    private localStorege:  AuthService,
    private articleService: ArticlesService)
    
  { this.form = new UntypedFormGroup({
    title: new UntypedFormControl('', [
      Validators.required,
      Validators.maxLength(70)
    ]),
    annotation: new UntypedFormControl('', [
      Validators.required,
      Validators.minLength(10)
    ]),
    editor: new UntypedFormControl('', [
      Validators.required,
      Validators.minLength(70)
    ]),
    IMGeditor: new UntypedFormControl('')
  });   
  
  }

  get title() {
    return this.form.controls.title as UntypedFormControl
  }

  get annotation() {
    return this.form.controls.annotation as UntypedFormControl
  }

  get editor() {
    return this.form.controls.title as UntypedFormControl
  }

  ngOnInit() {
      
    const routeParams = this.route.snapshot.paramMap;
    const articleIdFromRoute = Number(routeParams.get('articleId'));
  
    this.article = articles.find(article => article.id === articleIdFromRoute);

     // tslint:disable-next-line: no-string-literal
     this.form.controls['title'].setValue(this.article?.title);

     // tslint:disable-next-line: no-string-literal
     this.form.controls['annotation'].setValue(this.article?.caption);

      // tslint:disable-next-line: no-string-literal
      this.form.controls['editor'].setValue(this.article?.paragraph1);

      // tslint:disable-next-line: no-string-literal
      this.form.controls['IMGeditor'].setValue(this.article?.imageArticle);
  }

  submit() {
    const data = this.form.value;

    this.articleService.create({
      title: this.form.value.title as string,
      tags: {
        tagOne: '',
        tagTwo: ''
      },
      imageUser: ''
    })

  
  if (this.form.invalid) {
    return;
  }
  this.localStorege.clearToken();
  this.localStorege.removeToken(data);
  this.localStorege.setToken('token', data);
  this.localStorege.getToken(data);
  console.log('data', data);
  this.form.reset()

  const routeParams = this.route.snapshot.paramMap;
  const articleIdFromRoute = Number(routeParams.get('articleId'));
  this.router.navigate(["/app/articles", articleIdFromRoute]);
  
  }
}