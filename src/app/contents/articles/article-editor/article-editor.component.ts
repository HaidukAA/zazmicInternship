import { Component, OnInit } from '@angular/core';
import { FormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
    // private service: ServiceArticleFireService, 
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
    this.articleService.create({
      title: this.form.value.title as string,
      tags: {
        tagOne: 'Data Sciense',
        tagTwo: 'Artificial Intelligence'
      },
      imageUser: '/assets/images/user-images/tyler.png',
      nameUser: 'TYLER FOLKMAN',
      dataArticle: 'November 29, 2019',
      kudos: 147,
      imageArticle: '/assets/images/feed/Image.png',
      title2: 'Trust',
      caption: 'I would like to add another technique to your toolkit — confidence intervals.',
      captionImage: '“Can I trust your model?”',
      paragraph1: 'It is the first thing your manager asks as you present your latest work. How do you answer? Do you refer to the mean squared error? the R² coefficient? How about some example results? These are all great, but I would like to add another technique to your toolkit — confidence intervals.',
      paragraph2: 'At the end of the day, one of the most important jobs any data scientist has is to help people trust an algorithm that they most likely don’t completely understand.',
      paragraph3: 'One way to help build this trust is to add confidence intervals to your model\'s predictions. We will define confidence intervals for this article as a way of quantifying the uncertainty of an estimate. This tends to be easier for classification problems. Most algorithms provide probability estimates which can serve as confidence scores. For example, a 90% probability of being a cat should be more confident than a 50% probability.',
      paragraph4: 'For regression problems, though, things tend to get trickier. Most algorithms don’t have a natural way of providing a confidence or probability score. There are many solutions to this problem, one of my favorite being Bayesian models, but I would like to discuss the simplest and easiest method to implement for any machine learning model.',
    })
  }

}