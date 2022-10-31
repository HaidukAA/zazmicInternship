import { Component, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contents-sidebar-article-action',
  templateUrl: './contents-sidebar-article-action.component.html',
  styleUrls: ['./contents-sidebar-article-action.component.scss']
})
export class ContentsSidebarArticleActionComponent {

@Input() id?: number

}
