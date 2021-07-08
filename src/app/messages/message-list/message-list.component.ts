import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Message} from "../../shared/model";
import {mergeAll, pluck} from "rxjs/operators";
import {Observable} from "rxjs";

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent {
  messages: Observable<Message[]>;

  constructor(route: ActivatedRoute) {
    this.messages = (<any>route.data.pipe(pluck('messages'), mergeAll()));
  }

}
