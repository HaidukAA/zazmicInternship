import { Component, Input} from '@angular/core';


@Component({
  selector: 'app-article-reaction',
  templateUrl: './article-reaction.component.html',
  styleUrls: ['./article-reaction.component.scss']
})
export class ArticleReactionComponent {


  @Input() imageUser?: string
  @Input() nameUser?: string
  @Input() kudos?: number
  @Input() dataArticle?: string

}
