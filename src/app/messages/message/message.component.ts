import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Message} from "../../shared/model";
import {Observable} from "rxjs";
import {mergeAll, pluck} from "rxjs/operators";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {
  message: Observable<Message>;
  messages: Observable<Message[]>;

  constructor(route: ActivatedRoute) {
    this.messages = (<any>route.data.pipe(pluck('messages'), mergeAll()));
    this.message = route.data.pipe(pluck('message'));
  }

}
