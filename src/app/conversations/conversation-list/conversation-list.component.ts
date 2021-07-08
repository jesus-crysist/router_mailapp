import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Conversation} from "../../shared/model";
import {mergeAll, pluck} from "rxjs/operators";
import {Observable} from "rxjs";

@Component({
  selector: 'app-conversations',
  templateUrl: './conversation-list.component.html',
  styleUrls: ['./conversation-list.component.css']
})
export class ConversationListComponent {

  folder: Observable<string>;
  conversations: Observable<Conversation[]>;

  constructor(route: ActivatedRoute) {
    this.folder = route.params.pipe(pluck('folder'));
    this.conversations = (<any>route.data.pipe(pluck('conversations'), mergeAll()));
  }

}
