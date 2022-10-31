import { Component, DoCheck, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { ArticlesService } from 'src/app/services/article.service';
import { IArticle } from '../../../common/models/interfaces/data.model';
import { articles } from '../../../common/models/moockdata/data.moock';


@Component({
  selector: 'app-article-create',
  templateUrl: './article-create.component.html',
  styleUrls: ['./article-create.component.scss']
})
export class ArticleCreateComponent implements DoCheck{
  
  articles=articles;
  article: IArticle | undefined;

  formGroup: UntypedFormGroup;
  
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

  button ='CREATE ARTICLE';
  typeButton = 'submit';
  disable: boolean = true;
  buttonSVG = 'assets/images/svg/post_add.svg';

  buttonCancel ='CANCEL';
  typeButtonCancel = 'CANCEL';
  disableCancel: boolean = true;
  buttonSVGCancel = 'assets/images/svg/Close.svg';

  formSubmitted = false;
  // tslint:disable-next-line: no-empty
  constructor(private route: ActivatedRoute,
    private articleService: ArticlesService,
    private localStorege:  AuthService,
    private router: Router ) 
  { 
    this.formGroup = new UntypedFormGroup({
    title: new UntypedFormControl('', [
      Validators.required,
      Validators.maxLength(70)
    ]),
    annotation: new UntypedFormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    editor: new UntypedFormControl(''),
    tags: new UntypedFormControl([]),
    IMGeditor: new UntypedFormControl(''),
    tagsSearch: new UntypedFormControl('')
  });   
  }



  ngDoCheck(): void {
    if (this.formGroup.invalid) {
      this.disable = true;
    } else {
      this.disable = false;
    }
  }

  validationErrorExists() {
    return ((this.formSubmitted || this.formGroup.dirty) && !this.formGroup.valid);
  }

  onSubmit(){

    this.formSubmitted = true;
    const data = this.formGroup.value;

    this.articleService.create({
      title: this.formGroup.value.title as string,
      tags: {
        tagOne: '',
        tagTwo: ''
      },
      imageUser: ''
    })

  
  if (this.formGroup.invalid) {
    return;
  }
  this.localStorege.clearToken();
  this.localStorege.removeToken(data);
  this.localStorege.setToken('token', data);
  this.localStorege.getToken(data);
  console.log('data', data);
  this.formGroup.reset()

  
  } 

  public hasError = (controlName: string, errorName: string) => {
    return this.formGroup.controls[controlName].hasError(errorName);
  }
}

