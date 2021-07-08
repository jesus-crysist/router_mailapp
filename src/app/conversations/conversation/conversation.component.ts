import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs";
import {Conversation} from "../../shared/model";
import {pluck} from "rxjs/operators";

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent {
  conversation: Observable<Conversation>;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.conversation = route.data.pipe(pluck('conversation'));
  }

  goUp(): void {
    // @ts-ignore
    const folder = this.route.snapshot.parent.params['folder'];
    this.router.navigate(['/', folder]);
  }

}
